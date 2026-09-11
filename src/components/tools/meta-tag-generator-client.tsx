"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateMetaTags, getDefaultConfig, type MetaTagConfig } from "@/lib/tools/meta-tag-generator";

export default function MetaTagGeneratorClient() {
  const [config, setConfig] = useState<MetaTagConfig>(getDefaultConfig());
  const [output, setOutput] = useState("");

  const update = (key: keyof MetaTagConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    setOutput(generateMetaTags(config));
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Page Title" value={config.title} onChange={(v) => update("title", v)} placeholder="My Awesome Page" />
        <Input label="Description" value={config.description} onChange={(v) => update("description", v)} placeholder="A brief description..." />
        <Input label="Keywords" value={config.keywords} onChange={(v) => update("keywords", v)} placeholder="keyword1, keyword2" />
        <Input label="Author" value={config.author} onChange={(v) => update("author", v)} placeholder="John Doe" />
        <Input label="Canonical URL" value={config.canonical} onChange={(v) => update("canonical", v)} placeholder="https://example.com/page" />
        <Input label="Robots" value={config.robots} onChange={(v) => update("robots", v)} placeholder="index, follow" />
        <Input label="OG Title" value={config.ogTitle} onChange={(v) => update("ogTitle", v)} placeholder="Open Graph Title" />
        <Input label="OG Description" value={config.ogDescription} onChange={(v) => update("ogDescription", v)} placeholder="OG Description" />
        <Input label="OG Image URL" value={config.ogImage} onChange={(v) => update("ogImage", v)} placeholder="https://example.com/image.jpg" />
        <Input label="OG URL" value={config.ogUrl} onChange={(v) => update("ogUrl", v)} placeholder="https://example.com" />
        <Input label="Twitter Card" value={config.twitterCard} onChange={(v) => update("twitterCard", v)} placeholder="summary_large_image" />
        <Input label="Twitter Title" value={config.twitterTitle} onChange={(v) => update("twitterTitle", v)} placeholder="Twitter Title" />
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleGenerate} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">Generate Meta Tags</button>
        <ActionButtons onClear={() => { setConfig(getDefaultConfig()); setOutput(""); }} />
      </div>

      <ToolOutput label="Generated Meta Tags" value={output} downloadFilename="meta-tags.html" />
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
