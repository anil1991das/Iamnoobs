"use client";
import { useState } from "react";
import CopyButton from "@/components/copy-button";

const presets = [
  { name: "Bounce", keyframes: "0%, 100% { transform: translateY(0); }\n50% { transform: translateY(-20px); }", timing: "ease" },
  { name: "Fade In", keyframes: "from { opacity: 0; }\nto { opacity: 1; }", timing: "ease-in" },
  { name: "Slide In Left", keyframes: "from { transform: translateX(-100%); }\nto { transform: translateX(0); }", timing: "ease-out" },
  { name: "Pulse", keyframes: "0%, 100% { transform: scale(1); }\n50% { transform: scale(1.1); }", timing: "ease-in-out" },
  { name: "Shake", keyframes: "0%, 100% { transform: translateX(0); }\n25% { transform: translateX(-10px); }\n75% { transform: translateX(10px); }", timing: "ease-in-out" },
  { name: "Spin", keyframes: "from { transform: rotate(0deg); }\nto { transform: rotate(360deg); }", timing: "linear" },
  { name: "Flip", keyframes: "from { transform: perspective(400px) rotateY(0); }\nto { transform: perspective(400px) rotateY(360deg); }", timing: "ease-in-out" },
];
const timings = ["ease", "ease-in", "ease-out", "ease-in-out", "linear"];

export default function CssAnimationGeneratorClient() {
  const [preset, setPreset] = useState(0);
  const [name, setName] = useState("my-animation");
  const [duration, setDuration] = useState(1);
  const [timing, setTiming] = useState("ease");
  const [delay, setDelay] = useState(0);
  const [iterations, setIterations] = useState("infinite");
  const [keyframes, setKeyframes] = useState(presets[0].keyframes);
  const [playing, setPlaying] = useState(true);

  const css = `@keyframes ${name} {\n  ${keyframes.split("\n").join("\n  ")}\n}\n\n.element {\n  animation: ${name} ${duration}s ${timing} ${delay}s ${iterations};\n}`;

  const selectPreset = (i: number) => {
    setPreset(i);
    setKeyframes(presets[i].keyframes);
    setTiming(presets[i].timing);
    setName(presets[i].name.toLowerCase().replace(/\s+/g, "-"));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center rounded-xl border border-border bg-card p-12">
        <div className="h-20 w-20 rounded-xl bg-primary" style={{ animation: playing ? `${duration}s ${timing} ${delay}s ${iterations} preview-anim` : "none" }}>
          <style>{`@keyframes preview-anim { ${keyframes} }`}</style>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((p, i) => (
          <button key={p.name} onClick={() => selectPreset(i)} className={`rounded-lg px-3 py-1.5 text-sm ${preset === i ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{p.name}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <label className="space-y-1"><span className="text-sm text-muted">Name</span><input value={name} onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ""))} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Duration: {duration}s</span><input type="range" min={0.1} max={5} step={0.1} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Timing</span><select value={timing} onChange={(e) => setTiming(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">{timings.map((t) => <option key={t} value={t}>{t}</option>)}</select></label>
        <label className="space-y-1"><span className="text-sm text-muted">Delay: {delay}s</span><input type="range" min={0} max={5} step={0.1} value={delay} onChange={(e) => setDelay(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Iterations</span><select value={iterations} onChange={(e) => setIterations(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"><option value="infinite">infinite</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></label>
        <div className="flex items-end"><button onClick={() => setPlaying(!playing)} className="rounded-lg bg-accent px-4 py-2 text-sm text-foreground hover:bg-accent/80">{playing ? "⏸ Pause" : "▶ Play"}</button></div>
      </div>

      <label className="space-y-1">
        <span className="text-sm font-medium">Keyframes</span>
        <textarea value={keyframes} onChange={(e) => setKeyframes(e.target.value)} rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" />
      </label>

      <div className="space-y-2">
        <label className="text-sm font-medium">Generated CSS</label>
        <pre className="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm">{css}</pre>
        <CopyButton text={css} label="Copy CSS" />
      </div>
    </div>
  );
}
