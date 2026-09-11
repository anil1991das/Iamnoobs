"use client";
import { useState, useRef } from "react";

export default function YoutubeThumbnailPreviewClient() {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("My Awesome Video Title");
  const [channel, setChannel] = useState("My Channel");
  const [views, setViews] = useState("1.2M views");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const placeholder = "data:image/svg+xml," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" fill="#1a1a2e"><rect width="1280" height="720"/><text x="640" y="360" text-anchor="middle" fill="#666" font-size="40">Upload Thumbnail (1280×720)</text></svg>'
  );

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Upload Thumbnail (recommended: 1280×720)</span>
        <input type="file" accept="image/*" onChange={handleFile} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-1"><span className="text-sm text-muted">Video Title</span><input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Channel Name</span><input value={channel} onChange={(e) => setChannel(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Views</span><input value={views} onChange={(e) => setViews(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Desktop Preview</h3>
        <div className="mx-auto max-w-md">
          <div className="overflow-hidden rounded-xl">
            <img src={image || placeholder} alt="Thumbnail" className="aspect-video w-full object-cover" />
          </div>
          <div className="mt-2 flex gap-3">
            <div className="h-9 w-9 flex-shrink-0 rounded-full bg-accent" />
            <div>
              <p className="text-sm font-medium leading-tight line-clamp-2">{title}</p>
              <p className="text-xs text-muted">{channel}</p>
              <p className="text-xs text-muted">{views} • 1 hour ago</p>
            </div>
          </div>
        </div>

        <h3 className="text-sm font-medium">Mobile Preview</h3>
        <div className="mx-auto max-w-xs">
          <div className="overflow-hidden rounded-lg">
            <img src={image || placeholder} alt="Thumbnail" className="aspect-video w-full object-cover" />
          </div>
          <div className="mt-2 flex gap-2">
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-accent" />
            <div>
              <p className="text-xs font-medium leading-tight line-clamp-2">{title}</p>
              <p className="text-[10px] text-muted">{channel} • {views} • 1 hour ago</p>
            </div>
          </div>
        </div>

        <h3 className="text-sm font-medium">Sidebar Preview</h3>
        <div className="mx-auto max-w-sm">
          <div className="flex gap-2">
            <div className="w-40 flex-shrink-0 overflow-hidden rounded-lg">
              <img src={image || placeholder} alt="Thumbnail" className="aspect-video w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-medium leading-tight line-clamp-2">{title}</p>
              <p className="text-[10px] text-muted">{channel}</p>
              <p className="text-[10px] text-muted">{views}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
