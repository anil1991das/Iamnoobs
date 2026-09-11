export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  from: { name: string; address: string; gstin?: string };
  to: { name: string; address: string; gstin?: string };
  items: InvoiceItem[];
  gstRate: number;
  notes: string;
}

export function calculateInvoice(data: InvoiceData): { subtotal: number; gst: number; total: number } {
  const subtotal = data.items.reduce((sum, item) => sum + item.amount, 0);
  const gst = Math.round(subtotal * data.gstRate / 100 * 100) / 100;
  return { subtotal: Math.round(subtotal * 100) / 100, gst, total: Math.round((subtotal + gst) * 100) / 100 };
}

export function generateInvoiceHtml(data: InvoiceData): string {
  const { subtotal, gst, total } = calculateInvoice(data);
  const itemRows = data.items.map((item) => `
    <tr><td>${esc(item.description)}</td><td style="text-align:center">${item.quantity}</td><td style="text-align:right">₹${item.rate.toFixed(2)}</td><td style="text-align:right">₹${item.amount.toFixed(2)}</td></tr>`).join("");

  return `<!DOCTYPE html><html><head><style>
    body{font-family:Arial,sans-serif;margin:40px;color:#333}
    table{width:100%;border-collapse:collapse;margin:20px 0}
    th,td{border:1px solid #ddd;padding:10px}
    th{background:#f5f5f5}
    .header{display:flex;justify-content:space-between;margin-bottom:30px}
    .total{font-weight:bold;font-size:1.1em}
    h1{color:#2563eb;margin:0}
  </style></head><body>
  <div class="header">
    <div><h1>INVOICE</h1><p>#${esc(data.invoiceNumber)}</p><p>Date: ${esc(data.date)}</p><p>Due: ${esc(data.dueDate)}</p></div>
  </div>
  <div style="display:flex;justify-content:space-between;margin-bottom:20px">
    <div><strong>From:</strong><br>${esc(data.from.name)}<br>${esc(data.from.address)}${data.from.gstin ? `<br>GSTIN: ${esc(data.from.gstin)}` : ""}</div>
    <div><strong>To:</strong><br>${esc(data.to.name)}<br>${esc(data.to.address)}${data.to.gstin ? `<br>GSTIN: ${esc(data.to.gstin)}` : ""}</div>
  </div>
  <table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>${itemRows}</tbody></table>
  <div style="text-align:right;margin-top:20px">
    <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
    <p>GST (${data.gstRate}%): ₹${gst.toFixed(2)}</p>
    <p class="total">Total: ₹${total.toFixed(2)}</p>
  </div>
  ${data.notes ? `<div style="margin-top:30px;padding:10px;background:#f9f9f9;border-radius:4px"><strong>Notes:</strong><br>${esc(data.notes)}</div>` : ""}
  </body></html>`;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
