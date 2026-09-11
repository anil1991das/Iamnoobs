"use client";

import { useState } from "react";
import { type InvoiceItem, type InvoiceData, calculateInvoice, generateInvoiceHtml } from "@/lib/tools/invoice-generator";

export default function InvoiceGeneratorClient() {
  const [data, setData] = useState<InvoiceData>({
    invoiceNumber: "INV-001", date: new Date().toISOString().split("T")[0],
    dueDate: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
    from: { name: "", address: "", gstin: "" }, to: { name: "", address: "", gstin: "" },
    items: [{ description: "", quantity: 1, rate: 0, amount: 0 }],
    gstRate: 18, notes: "",
  });

  const updateItem = (i: number, field: keyof InvoiceItem, value: string | number) => {
    const items = [...data.items];
    (items[i] as unknown as Record<string, string | number>)[field] = value;
    if (field === "quantity" || field === "rate") items[i].amount = items[i].quantity * items[i].rate;
    setData({ ...data, items });
  };

  const addItem = () => setData({ ...data, items: [...data.items, { description: "", quantity: 1, rate: 0, amount: 0 }] });
  const removeItem = (i: number) => setData({ ...data, items: data.items.filter((_, j) => j !== i) });

  const handlePreview = () => {
    const html = generateInvoiceHtml(data);
    const win = window.open("", "_blank");
    if (win) { win.document.write(html); win.document.close(); }
  };

  const totals = calculateInvoice(data);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <h4 className="font-semibold text-sm">From</h4>
          <input type="text" value={data.from.name} onChange={(e) => setData({ ...data, from: { ...data.from, name: e.target.value } })} placeholder="Your Business Name" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <input type="text" value={data.from.address} onChange={(e) => setData({ ...data, from: { ...data.from, address: e.target.value } })} placeholder="Address" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <input type="text" value={data.from.gstin} onChange={(e) => setData({ ...data, from: { ...data.from, gstin: e.target.value } })} placeholder="GSTIN (optional)" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <h4 className="font-semibold text-sm">To</h4>
          <input type="text" value={data.to.name} onChange={(e) => setData({ ...data, to: { ...data.to, name: e.target.value } })} placeholder="Client Name" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <input type="text" value={data.to.address} onChange={(e) => setData({ ...data, to: { ...data.to, address: e.target.value } })} placeholder="Address" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <input type="text" value={data.to.gstin} onChange={(e) => setData({ ...data, to: { ...data.to, gstin: e.target.value } })} placeholder="GSTIN (optional)" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <div><label className="text-xs text-muted">Invoice #</label><input type="text" value={data.invoiceNumber} onChange={(e) => setData({ ...data, invoiceNumber: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Date</label><input type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Due Date</label><input type="date" value={data.dueDate} onChange={(e) => setData({ ...data, dueDate: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
        </div>
        <h4 className="font-semibold text-sm mt-4">Items</h4>
        {data.items.map((item, i) => (
          <div key={i} className="grid grid-cols-[1fr_80px_100px_100px_40px] gap-2 items-end">
            <div><input type="text" value={item.description} onChange={(e) => updateItem(i, "description", e.target.value)} placeholder="Description" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
            <div><input type="number" value={item.quantity} onChange={(e) => updateItem(i, "quantity", Number(e.target.value))} className="w-full rounded-lg border border-border bg-background px-2 py-2 text-sm" /></div>
            <div><input type="number" value={item.rate} onChange={(e) => updateItem(i, "rate", Number(e.target.value))} placeholder="Rate" className="w-full rounded-lg border border-border bg-background px-2 py-2 text-sm" /></div>
            <div className="text-sm font-medium py-2">₹{item.amount.toFixed(2)}</div>
            <button onClick={() => removeItem(i)} className="text-danger text-sm py-2">✕</button>
          </div>
        ))}
        <button onClick={addItem} className="text-sm text-primary hover:underline">+ Add Item</button>
        <div className="flex gap-3 items-center">
          <label className="text-xs text-muted">GST Rate:</label>
          {[0, 5, 12, 18, 28].map((r) => (
            <button key={r} onClick={() => setData({ ...data, gstRate: r })} className={`rounded px-2 py-1 text-xs ${data.gstRate === r ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{r}%</button>
          ))}
        </div>
        <textarea value={data.notes} onChange={(e) => setData({ ...data, notes: e.target.value })} placeholder="Notes (optional)" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" rows={2} />
      </div>
      <div className="rounded-xl border border-border bg-card p-4 text-right space-y-1">
        <p className="text-sm">Subtotal: ₹{totals.subtotal.toFixed(2)}</p>
        <p className="text-sm">GST ({data.gstRate}%): ₹{totals.gst.toFixed(2)}</p>
        <p className="text-lg font-bold text-primary">Total: ₹{totals.total.toFixed(2)}</p>
      </div>
      <button onClick={handlePreview} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover">Preview & Print Invoice</button>
    </div>
  );
}
