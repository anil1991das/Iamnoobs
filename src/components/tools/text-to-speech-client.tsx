"use client";
import { useState, useEffect, useRef } from "react";

export default function TextToSpeechClient() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const v = speechSynthesis.getVoices();
      if (v.length) { setVoices(v); if (!selectedVoice) setSelectedVoice(v[0]?.name || ""); }
    };
    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [selectedVoice]);

  const speak = () => {
    if (!text.trim()) return;
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utter.voice = voice;
    utter.rate = rate;
    utter.pitch = pitch;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    utterRef.current = utter;
    speechSynthesis.speak(utter);
    setSpeaking(true);
  };

  const stop = () => { speechSynthesis.cancel(); setSpeaking(false); };
  const pause = () => { speechSynthesis.pause(); };
  const resume = () => { speechSynthesis.resume(); };

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Text to Speak</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder="Enter text to convert to speech..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
        <p className="text-xs text-muted">{text.length} characters</p>
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-1">
          <span className="text-sm text-muted">Voice</span>
          <select value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm">
            {voices.map((v) => <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}
          </select>
        </label>
        <label className="space-y-1"><span className="text-sm text-muted">Rate: {rate}x</span><input type="range" min={0.1} max={3} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Pitch: {pitch}</span><input type="range" min={0} max={2} step={0.1} value={pitch} onChange={(e) => setPitch(Number(e.target.value))} className="w-full" /></label>
      </div>

      <div className="flex gap-2">
        {!speaking ? (
          <button onClick={speak} disabled={!text.trim()} className="rounded-lg bg-primary px-6 py-2 text-sm text-white hover:bg-primary/90 disabled:opacity-50">▶ Speak</button>
        ) : (
          <>
            <button onClick={pause} className="rounded-lg bg-accent px-4 py-2 text-sm text-foreground hover:bg-accent/80">⏸ Pause</button>
            <button onClick={resume} className="rounded-lg bg-accent px-4 py-2 text-sm text-foreground hover:bg-accent/80">▶ Resume</button>
            <button onClick={stop} className="rounded-lg bg-danger px-4 py-2 text-sm text-white hover:bg-danger/90">⏹ Stop</button>
          </>
        )}
      </div>

      {voices.length === 0 && (
        <p className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">Your browser does not support the Web Speech API or no voices are available.</p>
      )}
    </div>
  );
}
