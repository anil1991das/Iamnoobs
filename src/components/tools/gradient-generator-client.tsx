"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import { generateGradientCss } from "@/lib/tools/image-tools-extended";

export default function GradientGeneratorClient() {
  const [color1, setColor1] = useState("#3b82f6");
  const [color2, setColor2] = useState("#8b5cf6");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState<"linear" | "radial">("linear");

  const css = generateGradientCss(color1, color2, angle, type);

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="h-40 rounded-xl border border-border" style={{ background: css }} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="text-xs text-muted">Color 1</label>
            <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
          </div>
          <div>
            <label className="text-xs text-muted">Color 2</label>
            <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
          </div>
          <div>
            <label className="text-xs text-muted">Angle: {angle}°</label>
            <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-xs text-muted">Type</label>
            <div className="flex gap-1">
              <button onClick={() => setType("linear")} className={`flex-1 rounded px-2 py-1 text-xs ${type === "linear" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Linear</button>
              <button onClick={() => setType("radial")} className={`flex-1 rounded px-2 py-1 text-xs ${type === "radial" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Radial</button>
            </div>
          </div>
        </div>
      </div>
      <ToolOutput label="CSS Code" value={`background: ${css};`} downloadFilename="gradient.css" />
    </>
  );
}
