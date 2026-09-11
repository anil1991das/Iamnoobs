"use client";

import { useState } from "react";
import { getImageMetadata } from "@/lib/tools/image-tools-extended";

export default function ImageMetadataViewerClient() {
  const [metadata, setMetadata] = useState<Record<string, string> | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    const data = await getImageMetadata(file);
    setMetadata(data);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-6">
        <label className="block text-sm font-medium text-foreground mb-2">Upload an image</label>
        <input type="file" accept="image/*" onChange={handleFile} className="text-sm" />
      </div>
      {preview && <img src={preview} alt="Preview" className="max-h-60 rounded-xl border border-border" />}
      {metadata && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-2">
          <h3 className="text-lg font-semibold text-foreground mb-3">Image Metadata</h3>
          {Object.entries(metadata).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3 rounded-lg bg-accent/50 p-3">
              <span className="min-w-[120px] text-sm font-medium text-muted capitalize">{key}</span>
              <span className="text-sm text-foreground">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
