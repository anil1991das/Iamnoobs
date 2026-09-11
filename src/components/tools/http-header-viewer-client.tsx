"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import { commonRequestHeaders, commonResponseHeaders, httpStatusCodes, getStatusDescription } from "@/lib/tools/http-tools";

export default function HttpHeaderViewerClient() {
  const [tab, setTab] = useState<"request" | "response" | "status">("request");
  const [statusCode, setStatusCode] = useState("");

  const tabs = [
    { key: "request" as const, label: "Request Headers" },
    { key: "response" as const, label: "Response Headers" },
    { key: "status" as const, label: "Status Codes" },
  ];

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${tab === t.key ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{t.label}</button>
        ))}
      </div>

      {tab === "request" && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Common Request Headers</h3>
          {Object.entries(commonRequestHeaders).map(([header, desc]) => (
            <div key={header} className="flex items-start gap-3 rounded-lg bg-accent/50 p-3">
              <code className="min-w-[200px] text-sm font-medium text-primary">{header}</code>
              <span className="text-sm text-muted">{desc}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "response" && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Common Response Headers</h3>
          {Object.entries(commonResponseHeaders).map(([header, desc]) => (
            <div key={header} className="flex items-start gap-3 rounded-lg bg-accent/50 p-3">
              <code className="min-w-[200px] text-sm font-medium text-primary">{header}</code>
              <span className="text-sm text-muted">{desc}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "status" && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">HTTP Status Codes</h3>
          <div className="flex gap-2 items-center">
            <input type="text" value={statusCode} onChange={(e) => setStatusCode(e.target.value)} placeholder="Enter status code..." className="w-full max-w-[200px] rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
            {statusCode && <span className="text-sm text-muted">{getStatusDescription(parseInt(statusCode)) || "Unknown status code"}</span>}
          </div>
          <ToolOutput label="All Status Codes" value={Object.entries(httpStatusCodes).map(([code, desc]) => `${code}: ${desc}`).join("\n")} />
        </div>
      )}
    </>
  );
}
