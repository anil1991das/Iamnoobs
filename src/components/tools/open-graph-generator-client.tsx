"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateOgTags, getDefaultOgConfig, type OgConfig } from "@/lib/tools/open-graph-generator";

export default function OpenGraphGeneratorClient() {
  const [config, setConfig] = useState<OgConfig>(getDefaultOgConfig());
  const [output, setOutput] = useState("");

  const update = (key: keyof OgConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    setOutput(generateOgTags(config));
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Title" value={config.title} onChange={(v) => update("title", v)} placeholder="Page Title" />
        <Input label="Description" value={config.description} onChange={(v) => update("description", v)} placeholder="Page description" />
        <Input label="URL" value={config.url} onChange={(v) => update("url", v)} placeholder="https://example.com" />
        <Input label="Image URL" value={config.image} onChange={(v) => update("image", v)} placeholder="https://example.com/image.jpg" />
        <Input label="Site Name" value={config.siteName} onChange={(v) => update("siteName", v)} placeholder="My Website" />
        <Input label="Type" value={config.type} onChange={(v) => update("type", v)} placeholder="website" />
        <Input label="Locale" value={config.locale} onChange={(v) => update("locale", v)} placeholder="en_US" />
        <Input label="Twitter Card Type" value={config.twitterCard} onChange={(v) => update("twitterCard", v)} placeholder="summary_large_image" />
        <Input label="Twitter @site" value={config.twitterSite} onChange={(v) => update("twitterSite", v)} placeholder="@yoursite" />
        <Input label="Twitter @creator" value={config.twitterCreator} onChange={(v) => update("twitterCreator", v)} placeholder="@yourcreator" />
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleGenerate} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">Generate OG Tags</button>
        <ActionButtons onClear={() => { setConfig(getDefaultOgConfig()); setOutput(""); }} />
      </div>

      <ToolOutput label="Open Graph Meta Tags" value={output} downloadFilename="og-tags.html" />
    </>
  );
}

function Input({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
    </div>
  );
}
