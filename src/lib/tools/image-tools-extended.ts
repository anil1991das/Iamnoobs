export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = hex.replace(/^#/, "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!match) {
    const short = hex.replace(/^#/, "").match(/^([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (!short) return null;
    return { r: parseInt(short[1] + short[1], 16), g: parseInt(short[2] + short[2], 16), b: parseInt(short[3] + short[3], 16) };
  }
  return { r: parseInt(match[1], 16), g: parseInt(match[2], 16), b: parseInt(match[3], 16) };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((c) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, "0")).join("");
}

export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) { const v = Math.round(l * 255); return { r: v, g: v, b: v }; }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  };
}

export function generateGradientCss(color1: string, color2: string, angle: number, type: "linear" | "radial" = "linear"): string {
  if (type === "radial") return `radial-gradient(circle, ${color1}, ${color2})`;
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

export function generateFavicon(text: string, bgColor: string, textColor: string, size: number = 64): string {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = textColor;
  ctx.font = `bold ${size * 0.6}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text.slice(0, 2), size / 2, size / 2);
  return canvas.toDataURL("image/png");
}

export function getImageMetadata(file: File): Promise<Record<string, string>> {
  return new Promise((resolve) => {
    const info: Record<string, string> = {
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024).toFixed(1)} KB`,
      lastModified: new Date(file.lastModified).toLocaleString(),
    };
    const img = new Image();
    img.onload = () => {
      info.width = `${img.naturalWidth}px`;
      info.height = `${img.naturalHeight}px`;
      info.aspectRatio = `${(img.naturalWidth / img.naturalHeight).toFixed(2)}`;
      URL.revokeObjectURL(img.src);
      resolve(info);
    };
    img.onerror = () => resolve(info);
    img.src = URL.createObjectURL(file);
  });
}

export function addWatermark(imageData: string, text: string, opacity: number = 0.5, fontSize: number = 24): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "white";
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.textAlign = "center";
      const step = fontSize * 4;
      for (let y = step; y < img.height; y += step) {
        for (let x = step / 2; x < img.width; x += step) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-Math.PI / 6);
          ctx.fillText(text, 0, 0);
          ctx.restore();
        }
      }
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = imageData;
  });
}

export function blurImage(imageData: string, radius: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.filter = `blur(${radius}px)`;
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = imageData;
  });
}

export function cropImage(imageData: string, x: number, y: number, w: number, h: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = imageData;
  });
}
