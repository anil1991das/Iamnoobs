import { PDFDocument, rgb, StandardFonts, degrees as pdfDegrees } from "pdf-lib";

export async function addPageNumbers(pdfBytes: ArrayBuffer, position: "bottom-center" | "bottom-right" = "bottom-center"): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(pdfBytes);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const pages = pdf.getPages();
  pages.forEach((page, i) => {
    const { width } = page.getSize();
    const text = `${i + 1} / ${pages.length}`;
    const textWidth = font.widthOfTextAtSize(text, 10);
    const x = position === "bottom-center" ? (width - textWidth) / 2 : width - textWidth - 30;
    page.drawText(text, { x, y: 20, size: 10, font, color: rgb(0.3, 0.3, 0.3) });
  });
  return pdf.save();
}

export async function rotatePdfPages(pdfBytes: ArrayBuffer, degrees: 0 | 90 | 180 | 270): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(pdfBytes);
  pdf.getPages().forEach((page) => {
    page.setRotation(pdfDegrees((page.getRotation().angle + degrees) % 360));
  });
  return pdf.save();
}

export async function setPdfMetadata(pdfBytes: ArrayBuffer, meta: { title?: string; author?: string; subject?: string }): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(pdfBytes);
  if (meta.title) pdf.setTitle(meta.title);
  if (meta.author) pdf.setAuthor(meta.author);
  if (meta.subject) pdf.setSubject(meta.subject);
  return pdf.save();
}

export async function textToPdf(text: string, title: string = ""): Promise<Uint8Array> {
  const pdf = PDFDocument.create();
  const doc = await pdf;
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontSize = 11;
  const margin = 50;
  const lineHeight = fontSize * 1.4;
  const lines = text.split("\n");

  let page = doc.addPage();
  let { width, height } = page.getSize();
  let y = height - margin;

  if (title) {
    const titleFont = await doc.embedFont(StandardFonts.HelveticaBold);
    page.drawText(title, { x: margin, y, size: 16, font: titleFont, color: rgb(0, 0, 0) });
    y -= 30;
  }

  for (const line of lines) {
    const maxWidth = width - margin * 2;
    const words = line.split(" ");
    let currentLine = "";
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (font.widthOfTextAtSize(testLine, fontSize) > maxWidth && currentLine) {
        if (y < margin) { page = doc.addPage(); y = page.getSize().height - margin; }
        page.drawText(currentLine, { x: margin, y, size: fontSize, font, color: rgb(0, 0, 0) });
        y -= lineHeight;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (y < margin) { page = doc.addPage(); y = page.getSize().height - margin; }
    page.drawText(currentLine, { x: margin, y, size: fontSize, font, color: rgb(0, 0, 0) });
    y -= lineHeight;
  }

  return doc.save();
}

export async function markdownToPdf(md: string): Promise<Uint8Array> {
  const pdf = PDFDocument.create();
  const doc = await pdf;
  const regularFont = await doc.embedFont(StandardFonts.Helvetica);
  const boldFont = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 50;
  const lines = md.split("\n");

  let page = doc.addPage();
  let y = page.getSize().height - margin;

  for (const line of lines) {
    if (y < margin) { page = doc.addPage(); y = page.getSize().height - margin; }
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      page.drawText(trimmed.slice(4), { x: margin, y, size: 13, font: boldFont, color: rgb(0, 0, 0) });
      y -= 22;
    } else if (trimmed.startsWith("## ")) {
      page.drawText(trimmed.slice(3), { x: margin, y, size: 15, font: boldFont, color: rgb(0, 0, 0) });
      y -= 26;
    } else if (trimmed.startsWith("# ")) {
      page.drawText(trimmed.slice(2), { x: margin, y, size: 18, font: boldFont, color: rgb(0, 0, 0) });
      y -= 30;
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      page.drawText(`• ${trimmed.slice(2)}`, { x: margin + 10, y, size: 11, font: regularFont, color: rgb(0, 0, 0) });
      y -= 18;
    } else if (trimmed === "") {
      y -= 10;
    } else {
      const cleanText = trimmed.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1");
      page.drawText(cleanText, { x: margin, y, size: 11, font: regularFont, color: rgb(0, 0, 0) });
      y -= 18;
    }
  }

  return doc.save();
}

export const mimeTypes: Record<string, string> = {
  ".html": "text/html", ".htm": "text/html", ".css": "text/css", ".js": "application/javascript",
  ".json": "application/json", ".xml": "application/xml", ".csv": "text/csv", ".txt": "text/plain",
  ".md": "text/markdown", ".pdf": "application/pdf", ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xls": "application/vnd.ms-excel", ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".ppt": "application/vnd.ms-powerpoint", ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".zip": "application/zip", ".gz": "application/gzip", ".tar": "application/x-tar",
  ".rar": "application/vnd.rar", ".7z": "application/x-7z-compressed",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".bmp": "image/bmp",
  ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ogg": "audio/ogg", ".aac": "audio/aac",
  ".mp4": "video/mp4", ".webm": "video/webm", ".avi": "video/x-msvideo", ".mov": "video/quicktime",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf", ".otf": "font/otf",
  ".yaml": "application/x-yaml", ".yml": "application/x-yaml", ".ts": "application/typescript",
  ".tsx": "application/typescript", ".jsx": "text/jsx", ".sql": "application/sql",
  ".sh": "application/x-sh", ".py": "text/x-python", ".rb": "application/x-ruby",
  ".java": "text/x-java-source", ".c": "text/x-c", ".cpp": "text/x-c++src",
  ".go": "text/x-go", ".rs": "text/x-rustsrc", ".swift": "text/x-swift",
  ".wasm": "application/wasm", ".map": "application/json",
};

export function getMimeType(filename: string): string {
  const ext = "." + filename.split(".").pop()?.toLowerCase();
  return mimeTypes[ext] || "application/octet-stream";
}

export function generateFilename(text: string, extension: string = ""): string {
  const slug = text
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const timestamp = Date.now().toString(36);
  const ext = extension.startsWith(".") ? extension : extension ? `.${extension}` : "";
  return `${slug}-${timestamp}${ext}`;
}
