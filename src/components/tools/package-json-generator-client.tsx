"use client";
import { useState } from "react";
import CopyButton from "@/components/copy-button";

export default function PackageJsonGeneratorClient() {
  const [name, setName] = useState("my-project");
  const [version, setVersion] = useState("1.0.0");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [license, setLicense] = useState("MIT");
  const [main, setMain] = useState("index.js");
  const [type, setType] = useState("module");
  const [deps, setDeps] = useState("");
  const [devDeps, setDevDeps] = useState("");
  const [scripts, setScripts] = useState("start: node index.js\nbuild: tsc\ntest: jest");

  const parseKV = (text: string) => {
    const obj: Record<string, string> = {};
    text.split("\n").filter((l) => l.trim()).forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length) obj[key.trim()] = rest.join(":").trim();
    });
    return obj;
  };

  const pkg = JSON.stringify({
    name: name || "my-project",
    version,
    description: description || undefined,
    main,
    type,
    scripts: Object.keys(parseKV(scripts)).length ? parseKV(scripts) : undefined,
    author: author || undefined,
    license,
    dependencies: Object.keys(parseKV(deps)).length ? parseKV(deps) : undefined,
    devDependencies: Object.keys(parseKV(devDeps)).length ? parseKV(devDeps) : undefined,
  }, null, 2);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1"><span className="text-sm font-medium">Package Name</span><input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">Version</span><input value={version} onChange={(e) => setVersion(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">Description</span><input value={description} onChange={(e) => setDescription(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">Author</span><input value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">License</span>
          <select value={license} onChange={(e) => setLicense(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
            {["MIT", "Apache-2.0", "GPL-3.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "UNLICENSED"].map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </label>
        <label className="space-y-1"><span className="text-sm font-medium">Entry Point</span><input value={main} onChange={(e) => setMain(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
            <option value="module">module (ESM)</option><option value="commonjs">commonjs (CJS)</option>
          </select>
        </label>
      </div>

      <label className="space-y-1"><span className="text-sm font-medium">Scripts (name: command per line)</span><textarea value={scripts} onChange={(e) => setScripts(e.target.value)} rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" /></label>
      <label className="space-y-1"><span className="text-sm font-medium">Dependencies (name: version per line)</span><textarea value={deps} onChange={(e) => setDeps(e.target.value)} rows={3} placeholder="express: ^4.18.0" className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" /></label>
      <label className="space-y-1"><span className="text-sm font-medium">Dev Dependencies (name: version per line)</span><textarea value={devDeps} onChange={(e) => setDevDeps(e.target.value)} rows={3} placeholder="typescript: ^5.0.0" className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" /></label>

      <div className="space-y-2">
        <label className="text-sm font-medium">package.json</label>
        <pre className="max-h-80 overflow-auto rounded-xl border border-border bg-card p-4 text-sm">{pkg}</pre>
        <CopyButton text={pkg} label="Copy package.json" />
      </div>
    </div>
  );
}
