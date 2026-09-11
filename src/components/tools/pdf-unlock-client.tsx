"use client";

export default function PdfUnlockClient() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">PDF Unlock Information</h3>
      <div className="space-y-3 text-sm text-muted">
        <p>PDF password removal depends on the type of protection:</p>
        <div className="rounded-lg bg-accent/50 p-4 space-y-2">
          <h4 className="font-semibold text-foreground">User Password (Open Password)</h4>
          <p>This prevents opening the PDF. Removal requires knowing the password. Client-side tools cannot brute-force this securely.</p>
        </div>
        <div className="rounded-lg bg-accent/50 p-4 space-y-2">
          <h4 className="font-semibold text-foreground">Owner Password (Permissions Password)</h4>
          <p>This restricts printing, copying, and editing. Some PDF tools can remove these restrictions if no open password is set.</p>
        </div>
        <div className="rounded-lg bg-accent/50 p-4 space-y-2">
          <h4 className="font-semibold text-foreground">Recommended Tools</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>QPDF (command-line, free)</li>
            <li>PDFtk (free tool)</li>
            <li>Adobe Acrobat (if you know the password)</li>
          </ul>
        </div>
        <p className="text-xs">Note: Only remove passwords from documents you own or have authorization to modify.</p>
      </div>
    </div>
  );
}
