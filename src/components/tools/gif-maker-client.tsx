"use client";

import { useState, useRef } from "react";

export default function GifMakerClient() {
  const [frames, setFrames] = useState<string[]>([]);
  const [delay, setDelay] = useState(500);
  const [playing, setPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const readers = files.map((f) => new Promise<string>((resolve) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result as string);
      r.readAsDataURL(f);
    }));
    Promise.all(readers).then(setFrames);
  };

  const togglePlay = () => {
    if (playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPlaying(false);
    } else {
      setPlaying(true);
      intervalRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % frames.length);
      }, delay);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">GIF Maker (Animation Preview)</h3>
      <input type="file" multiple accept="image/*" onChange={handleFiles} className="text-sm" />
      {frames.length > 0 && (
        <>
          <div className="flex items-center gap-3">
            <label className="text-sm text-muted">Delay: {delay}ms</label>
            <input type="range" min="100" max="2000" step="100" value={delay} onChange={(e) => setDelay(Number(e.target.value))} className="flex-1" />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover">{playing ? "Stop" : "Play"}</button>
            <span className="text-sm text-muted">Frame {currentFrame + 1} of {frames.length}</span>
          </div>
          <div className="rounded-xl border border-border p-4 bg-accent/30 flex items-center justify-center">
            <img src={frames[currentFrame]} alt={`Frame ${currentFrame + 1}`} className="max-h-80 rounded" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {frames.map((f, i) => (
              <img key={i} src={f} alt={`Thumb ${i}`} onClick={() => setCurrentFrame(i)} className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${i === currentFrame ? "border-primary" : "border-border"}`} />
            ))}
          </div>
          <p className="text-xs text-muted">Note: This creates an animated preview. For actual GIF export, a GIF encoding library is needed.</p>
        </>
      )}
    </div>
  );
}
