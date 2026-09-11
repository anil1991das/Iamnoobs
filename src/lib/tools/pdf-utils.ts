import { PDFDocument } from "pdf-lib";

export async function mergePdfs(files: ArrayBuffer[]): Promise<Uint8Array> {
  const merged = await PDFDocument.create();
  for (const file of files) {
    const doc = await PDFDocument.load(file);
    const pages = await merged.copyPages(doc, doc.getPageIndices());
    pages.forEach((page) => merged.addPage(page));
  }
  return merged.save();
}

export async function splitPdf(file: ArrayBuffer, ranges: [number, number][]): Promise<Uint8Array[]> {
  const source = await PDFDocument.load(file);
  const results: Uint8Array[] = [];
  for (const [start, end] of ranges) {
    const doc = await PDFDocument.create();
    const indices = Array.from({ length: end - start + 1 }, (_, i) => start - 1 + i);
    const pages = await doc.copyPages(source, indices);
    pages.forEach((page) => doc.addPage(page));
    results.push(await doc.save());
  }
  return results;
}

export async function getPdfPageCount(file: ArrayBuffer): Promise<number> {
  const doc = await PDFDocument.load(file);
  return doc.getPageCount();
}

export async function compressPdf(file: ArrayBuffer): Promise<Uint8Array> {
  // Re-serialize with pdf-lib (removes unused objects)
  const doc = await PDFDocument.load(file, { ignoreEncryption: true });
  return doc.save();
}

export async function extractPdfText(file: ArrayBuffer): Promise<string> {
  // pdf-lib doesn't have text extraction; return page count info
  const doc = await PDFDocument.load(file);
  const pageCount = doc.getPageCount();
  const info: string[] = [`PDF contains ${pageCount} page(s).`];
  for (let i = 0; i < pageCount; i++) {
    const page = doc.getPage(i);
    const { width, height } = page.getSize();
    info.push(`Page ${i + 1}: ${Math.round(width)} x ${Math.round(height)} pts`);
  }
  return info.join("\n");
}

export async function createPdf(text: string, fontSize = 12): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont("Helvetica" as never);
  const lines = text.split("\n");
  const margin = 50;
  const lineHeight = fontSize * 1.4;

  let page = doc.addPage();
  let { height } = page.getSize();
  let y = height - margin;

  for (const line of lines) {
    if (y < margin + lineHeight) {
      page = doc.addPage();
      height = page.getSize().height;
      y = height - margin;
    }
    page.drawText(line, { x: margin, y, size: fontSize, font });
    y -= lineHeight;
  }

  return doc.save();
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}
