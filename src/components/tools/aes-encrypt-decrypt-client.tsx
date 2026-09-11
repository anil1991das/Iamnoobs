"use client";
import { useState } from "react";
import CopyButton from "@/components/copy-button";

export default function AesEncryptDecryptClient() {
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function deriveKey(password: string, salt: Uint8Array) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", salt: salt.buffer as ArrayBuffer, iterations: 100000, hash: "SHA-256" }, keyMaterial, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }

  async function handleEncrypt() {
    if (!input.trim() || !password.trim()) { setError("Both text and password are required"); return; }
    setLoading(true); setError("");
    try {
      const enc = new TextEncoder();
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const key = await deriveKey(password, salt);
      const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv.buffer as ArrayBuffer }, key, enc.encode(input));
      const combined = new Uint8Array(salt.length + iv.length + new Uint8Array(encrypted).length);
      combined.set(salt, 0);
      combined.set(iv, salt.length);
      combined.set(new Uint8Array(encrypted), salt.length + iv.length);
      setOutput(btoa(String.fromCharCode(...combined)));
    } catch (e) {
      setError((e as Error).message);
    }
    setLoading(false);
  }

  async function handleDecrypt() {
    if (!input.trim() || !password.trim()) { setError("Both ciphertext and password are required"); return; }
    setLoading(true); setError("");
    try {
      const data = Uint8Array.from(atob(input), (c) => c.charCodeAt(0));
      const salt = data.slice(0, 16);
      const iv = data.slice(16, 28);
      const encrypted = data.slice(28);
      const key = await deriveKey(password, salt);
      const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv.buffer as ArrayBuffer }, key, encrypted.buffer as ArrayBuffer);
      setOutput(new TextDecoder().decode(decrypted));
    } catch {
      setError("Decryption failed. Check the password and ciphertext.");
    }
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button onClick={() => { setMode("encrypt"); setOutput(""); setError(""); }} className={`rounded-lg px-4 py-2 text-sm ${mode === "encrypt" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Encrypt</button>
        <button onClick={() => { setMode("decrypt"); setOutput(""); setError(""); }} className={`rounded-lg px-4 py-2 text-sm ${mode === "decrypt" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Decrypt</button>
      </div>

      <label className="space-y-1">
        <span className="text-sm font-medium">{mode === "encrypt" ? "Plain Text" : "Encrypted Text (Base64)"}</span>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={4} placeholder={mode === "encrypt" ? "Enter text to encrypt..." : "Paste encrypted base64 text..."} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <label className="space-y-1">
        <span className="text-sm font-medium">Password</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter encryption password..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <button onClick={mode === "encrypt" ? handleEncrypt : handleDecrypt} disabled={loading} className="rounded-lg bg-primary px-6 py-2 text-sm text-white hover:bg-primary/90 disabled:opacity-50">
        {loading ? "Processing..." : mode === "encrypt" ? "Encrypt" : "Decrypt"}
      </button>

      {error && <p className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</p>}

      {output && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Result</label>
          <pre className="max-h-60 overflow-auto whitespace-pre-wrap break-all rounded-xl border border-border bg-card p-4 text-sm">{output}</pre>
          <CopyButton text={output} label="Copy Result" />
        </div>
      )}
    </div>
  );
}
