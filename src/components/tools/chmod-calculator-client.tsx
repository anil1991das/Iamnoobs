"use client";
import { useState, useMemo } from "react";
import { calculateChmod } from "@/lib/tools/css-design-tools";
import CopyButton from "@/components/copy-button";

const labels = ["Read", "Write", "Execute"];

export default function ChmodCalculatorClient() {
  const [owner, setOwner] = useState([true, true, false]);
  const [group, setGroup] = useState([true, false, false]);
  const [others, setOthers] = useState([true, false, false]);
  const [numericInput, setNumericInput] = useState("");

  const result = useMemo(() => calculateChmod(owner, group, others), [owner, group, others]);

  const applyNumeric = (val: string) => {
    setNumericInput(val);
    if (/^[0-7]{3}$/.test(val)) {
      const parse = (n: number) => [(n & 4) !== 0, (n & 2) !== 0, (n & 1) !== 0];
      setOwner(parse(parseInt(val[0])));
      setGroup(parse(parseInt(val[1])));
      setOthers(parse(parseInt(val[2])));
    }
  };

  const toggle = (setter: React.Dispatch<React.SetStateAction<boolean[]>>, idx: number) => {
    setter((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    setNumericInput("");
  };

  const renderGroup = (name: string, perms: boolean[], setter: React.Dispatch<React.SetStateAction<boolean[]>>) => (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">{name}</h3>
      <div className="flex gap-2">
        {labels.map((l, i) => (
          <button key={l} onClick={() => toggle(setter, i)} className={`rounded-lg px-3 py-2 text-xs ${perms[i] ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{l}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Enter Numeric Permission</span>
        <input value={numericInput} onChange={(e) => applyNumeric(e.target.value)} placeholder="755" maxLength={3} className="w-32 rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" />
      </label>

      <div className="grid grid-cols-3 gap-4">
        {renderGroup("Owner", owner, setOwner)}
        {renderGroup("Group", group, setGroup)}
        {renderGroup("Others", others, setOthers)}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-xs text-muted">Numeric</p>
          <p className="font-mono text-3xl font-bold text-primary">{result.numeric}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-xs text-muted">Symbolic</p>
          <p className="font-mono text-3xl font-bold">{result.symbolic}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Command</p>
        <pre className="rounded-xl border border-border bg-card p-4 text-sm">chmod {result.numeric} filename</pre>
        <CopyButton text={`chmod ${result.numeric} filename`} label="Copy Command" />
      </div>
    </div>
  );
}
