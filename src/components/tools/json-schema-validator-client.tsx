"use client";
import { useState } from "react";
import { validateJsonSchema } from "@/lib/tools/css-design-tools";

export default function JsonSchemaValidatorClient() {
  const [data, setData] = useState('{\n  "name": "John",\n  "age": 30\n}');
  const [schema, setSchema] = useState('{\n  "type": "object",\n  "required": ["name", "age"],\n  "properties": {\n    "name": { "type": "string" },\n    "age": { "type": "integer", "minimum": 0 }\n  }\n}');
  const [result, setResult] = useState<{ valid: boolean; errors: string[] } | null>(null);

  const validate = () => {
    const r = validateJsonSchema(data, schema);
    setResult(r);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">JSON Data</span>
          <textarea value={data} onChange={(e) => setData(e.target.value)} rows={10} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">JSON Schema</span>
          <textarea value={schema} onChange={(e) => setSchema(e.target.value)} rows={10} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" />
        </label>
      </div>

      <button onClick={validate} className="rounded-lg bg-primary px-6 py-2 text-sm text-white hover:bg-primary/90">Validate</button>

      {result && (
        <div className={`rounded-xl border p-4 ${result.valid ? "border-green-500 bg-green-500/10" : "border-danger bg-danger/10"}`}>
          <p className={`font-medium ${result.valid ? "text-green-500" : "text-danger"}`}>
            {result.valid ? "✓ Valid — JSON data matches the schema" : "✗ Invalid — Validation errors found"}
          </p>
          {result.errors.length > 0 && (
            <ul className="mt-2 space-y-1">
              {result.errors.map((e, i) => <li key={i} className="text-sm text-danger">• {e}</li>)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
