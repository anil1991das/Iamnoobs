export async function compressImage(file: File, quality: number, maxWidth?: number, maxHeight?: number): Promise<Blob> {
  const img = await loadImage(file);
  const { width, height } = calculateDimensions(img.width, img.height, maxWidth, maxHeight);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, width, height);
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Compression failed"))),
      file.type === "image/png" ? "image/png" : "image/jpeg",
      quality / 100
    );
  });
}

export async function convertImage(file: File, targetFormat: string): Promise<Blob> {
  const img = await loadImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d")!;
  if (targetFormat !== "image/png") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Conversion failed"))),
      targetFormat,
      0.92
    );
  });
}

export async function resizeImage(file: File, width: number, height: number, maintainAspect: boolean): Promise<Blob> {
  const img = await loadImage(file);
  let finalW = width;
  let finalH = height;
  if (maintainAspect) {
    const ratio = img.width / img.height;
    if (width / height > ratio) {
      finalW = Math.round(height * ratio);
    } else {
      finalH = Math.round(width / ratio);
    }
  }
  const canvas = document.createElement("canvas");
  canvas.width = finalW;
  canvas.height = finalH;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, finalW, finalH);
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Resize failed"))),
      file.type,
      0.92
    );
  });
}

export async function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export function base64ToImageBlob(base64: string): Blob {
  const parts = base64.split(",");
  const mimeMatch = parts[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "image/png";
  const raw = atob(parts.length > 1 ? parts[1] : parts[0]);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

function loadImage(file: File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(img.src); resolve(img); };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
}

function calculateDimensions(origW: number, origH: number, maxW?: number, maxH?: number): { width: number; height: number } {
  let w = origW, h = origH;
  if (maxW && w > maxW) { h = Math.round(h * (maxW / w)); w = maxW; }
  if (maxH && h > maxH) { w = Math.round(w * (maxH / h)); h = maxH; }
  return { width: w, height: h };
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}
