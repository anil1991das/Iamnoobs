"use client";

import { useState } from "react";
import type { ActivityConfig } from "@/lib/activities/registry";

const internetEras = [
  {
    year: "1990s",
    title: "Pages find their feet",
    detail:
      "Early public websites were often simple documents linked together. A page might have a heading, a few links, and images that loaded over a slow connection.",
    signal: "HTML gives documents structure; links make a web.",
    color: "from-amber-500/15 to-orange-500/5",
  },
  {
    year: "2000s",
    title: "The web gets interactive",
    detail:
      "Faster connections and richer browser features made forums, blogs, maps, and web apps more practical. People became creators as well as readers.",
    signal: "CSS styles pages; JavaScript adds behavior.",
    color: "from-sky-500/15 to-blue-500/5",
  },
  {
    year: "2010s",
    title: "The web fits in a pocket",
    detail:
      "Smartphones changed how people browse. Responsive layouts helped the same site adapt to a wide monitor, a tablet, or a small screen.",
    signal: "Responsive design adapts to different viewports.",
    color: "from-violet-500/15 to-fuchsia-500/5",
  },
  {
    year: "Today",
    title: "The web is a platform",
    detail:
      "Browsers now run complex applications for collaboration, creativity, learning, and entertainment while standards help them work across devices.",
    signal: "Open standards help the web stay connected.",
    color: "from-emerald-500/15 to-teal-500/5",
  },
];

const signalStops = [
  {
    title: "You enter an address",
    icon: "⌨️",
    detail:
      "The browser reads the URL and prepares a request for the site and resource you asked to visit.",
    concept: "A URL identifies where a web resource can be found.",
    snippet: "https://example.test/learn",
  },
  {
    title: "A name is looked up",
    icon: "📖",
    detail:
      "A DNS resolver helps find the network address associated with the domain name, much like looking up a contact before calling.",
    concept: "DNS translates human-readable domain names into network addresses.",
    snippet: "example.test → an IP address",
  },
  {
    title: "A connection is made",
    icon: "🔗",
    detail:
      "The browser establishes a connection to the server. Secure HTTPS connections also negotiate encryption.",
    concept: "HTTPS protects data in transit using TLS.",
    snippet: "Browser ⇄ secure connection ⇄ server",
  },
  {
    title: "The browser asks",
    icon: "📨",
    detail:
      "The browser sends an HTTP request that describes the resource it wants. Requests can also carry headers and submitted data.",
    concept: "HTTP defines a request-and-response conversation.",
    snippet: "GET /learn",
  },
  {
    title: "A server responds",
    icon: "🖥️",
    detail:
      "The server processes the request and responds with a status, headers, and often content such as HTML, images, or data.",
    concept: "A status code gives a quick summary of the response.",
    snippet: "200 OK · Content-Type: text/html",
  },
  {
    title: "The page appears",
    icon: "🪄",
    detail:
      "The browser uses the response and any linked resources to build, style, and display the page you see.",
    concept: "The browser turns web resources into an interactive view.",
    snippet: "HTML + CSS + JavaScript → page",
  },
];

const palette = [
  { label: "Midnight", value: "#172554" },
  { label: "Ocean", value: "#2563eb" },
  { label: "Sky", value: "#38bdf8" },
  { label: "Mint", value: "#34d399" },
  { label: "Leaf", value: "#15803d" },
  { label: "Sun", value: "#facc15" },
  { label: "Coral", value: "#fb7185" },
  { label: "Berry", value: "#a855f7" },
  { label: "Cloud", value: "#f8fafc" },
];

type AlgorithmMode = "linear" | "binary" | "selection";

function InternetTimeMachine() {
  const [selectedEra, setSelectedEra] = useState(0);
  const era = internetEras[selectedEra];

  return (
    <section
      aria-labelledby="time-machine-title"
      className="rounded-2xl border border-card-border bg-card p-5 sm:p-7"
    >
      <div className={`rounded-xl bg-gradient-to-br ${era.color} p-6 sm:p-8`}>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Browsing through time
        </p>
        <h2 id="time-machine-title" className="mt-2 text-3xl font-bold">
          {era.title}
        </h2>
        <p className="mt-1 text-lg font-semibold text-primary">{era.year}</p>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          {era.detail}
        </p>
        <div className="mt-5 inline-flex rounded-lg border border-card-border bg-card/80 px-4 py-3 text-sm">
          <span className="mr-2 font-semibold">Web idea:</span>
          <span>{era.signal}</span>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="internet-era" className="flex items-center justify-between text-sm font-medium">
          <span>Choose an era</span>
          <span className="text-muted-foreground">{era.year}</span>
        </label>
        <input
          id="internet-era"
          type="range"
          min={0}
          max={internetEras.length - 1}
          value={selectedEra}
          onChange={(event) => setSelectedEra(Number(event.target.value))}
          className="mt-3 w-full accent-primary"
        />
        <div className="mt-2 grid grid-cols-4 gap-2">
          {internetEras.map((item, index) => (
            <button
              key={item.year}
              type="button"
              aria-pressed={selectedEra === index}
              onClick={() => setSelectedEra(index)}
              className={`min-h-10 rounded-lg border px-2 text-xs font-medium sm:text-sm ${
                selectedEra === index
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-card-border hover:bg-muted"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function PixelPlayground() {
  const gridSize = 12;
  const [selectedColor, setSelectedColor] = useState(palette[1].value);
  const [pixels, setPixels] = useState<Record<number, string>>({});
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  function paintPixel(index: number) {
    setPixels((current) => ({ ...current, [index]: selectedColor }));
    setSelectedCell(index);
  }

  function clearCanvas() {
    setPixels({});
    setSelectedCell(null);
  }

  function loadStarterScene() {
    const starter: Record<number, string> = {};
    for (let x = 3; x <= 8; x += 1) {
      starter[7 * gridSize + x] = palette[4].value;
      starter[8 * gridSize + x] = palette[4].value;
    }
    starter[6 * gridSize + 4] = palette[3].value;
    starter[6 * gridSize + 5] = palette[3].value;
    starter[6 * gridSize + 6] = palette[3].value;
    starter[5 * gridSize + 5] = palette[5].value;
    starter[4 * gridSize + 5] = palette[5].value;
    setPixels(starter);
    setSelectedCell(7 * gridSize + 5);
  }

  const selectedCoordinates =
    selectedCell === null
      ? null
      : {
          x: (selectedCell % gridSize) + 1,
          y: Math.floor(selectedCell / gridSize) + 1,
        };

  return (
    <section
      aria-labelledby="pixel-playground-title"
      className="rounded-2xl border border-card-border bg-card p-5 sm:p-7"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div
          className="mx-auto grid aspect-square w-full max-w-[28rem] touch-manipulation overflow-hidden rounded-xl border border-card-border bg-muted p-1"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
          }}
          role="group"
          aria-labelledby="pixel-playground-title"
        >
          {Array.from({ length: gridSize * gridSize }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Paint pixel column ${index % gridSize + 1}, row ${Math.floor(index / gridSize) + 1}`}
              onClick={() => paintPixel(index)}
              className="m-px rounded-sm border border-card-border/40 transition-colors hover:border-primary"
              style={{ backgroundColor: pixels[index] ?? "var(--card)" }}
            />
          ))}
        </div>
        <div>
          <h2 id="pixel-playground-title" className="text-xl font-semibold">
            Your pixel canvas
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Choose a color, then tap or click any square to paint. Every square
            is one pixel at this tiny scale.
          </p>
          <fieldset className="mt-5">
            <legend className="text-sm font-semibold">Color palette</legend>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {palette.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  aria-label={color.label}
                  aria-pressed={selectedColor === color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`h-9 rounded-lg border ${
                    selectedColor === color.value
                      ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-card"
                      : "border-card-border"
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Selected: {palette.find((color) => color.value === selectedColor)?.label}
            </p>
          </fieldset>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={loadStarterScene}
              className="min-h-10 rounded-lg bg-primary px-3 text-sm font-semibold text-white hover:bg-primary-hover"
            >
              Try a starter
            </button>
            <button
              type="button"
              onClick={clearCanvas}
              className="min-h-10 rounded-lg border border-card-border px-3 text-sm font-semibold hover:bg-muted"
            >
              Clear canvas
            </button>
          </div>
          <div className="mt-5 rounded-xl bg-muted p-4 text-sm">
            <h3 className="font-semibold">Pixel coordinates</h3>
            <p className="mt-1 leading-6 text-muted-foreground" aria-live="polite">
              {selectedCoordinates
                ? `You painted column ${selectedCoordinates.x}, row ${selectedCoordinates.y}. A program can identify this square with two coordinates.`
                : "Paint a square to see its position on the grid."}
            </p>
          </div>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Your drawing stays in this page while it is open; nothing is uploaded.
          </p>
        </div>
      </div>
    </section>
  );
}

function AlgorithmPlayground() {
  const [mode, setMode] = useState<AlgorithmMode>("linear");
  const [linearIndex, setLinearIndex] = useState(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(5);
  const [foundAt, setFoundAt] = useState<number | null>(null);
  const [comparisons, setComparisons] = useState(0);
  const [sortValues, setSortValues] = useState([7, 3, 9, 2, 8, 4]);
  const [sortPosition, setSortPosition] = useState(0);
  const [sortScanIndex, setSortScanIndex] = useState(1);
  const [sortMinimumIndex, setSortMinimumIndex] = useState(0);
  const [sortPhase, setSortPhase] = useState<"scan" | "place">("scan");
  const [swaps, setSwaps] = useState(0);
  const values =
    mode === "linear"
      ? [7, 3, 9, 2, 8, 4]
      : mode === "binary"
        ? [2, 3, 4, 7, 8, 9]
        : sortValues;
  const target = 8;
  const midpoint = Math.floor((low + high) / 2);
  const currentIndex =
    mode === "linear"
      ? linearIndex
      : mode === "binary"
        ? midpoint
        : sortScanIndex;
  const finished = mode === "selection"
    ? sortPosition >= values.length - 1
    : foundAt !== null ||
      (mode === "linear" && linearIndex >= values.length) ||
      (mode === "binary" && low > high);

  function reset(nextMode: AlgorithmMode = mode) {
    setMode(nextMode);
    setLinearIndex(0);
    setLow(0);
    setHigh(5);
    setFoundAt(null);
    setComparisons(0);
    setSortValues([7, 3, 9, 2, 8, 4]);
    setSortPosition(0);
    setSortScanIndex(1);
    setSortMinimumIndex(0);
    setSortPhase("scan");
    setSwaps(0);
  }

  function nextStep() {
    if (finished) return;
    if (mode === "selection") {
      if (sortPhase === "place") {
        const reordered = [...sortValues];
        [reordered[sortPosition], reordered[sortMinimumIndex]] = [
          reordered[sortMinimumIndex],
          reordered[sortPosition],
        ];
        setSortValues(reordered);
        if (sortMinimumIndex !== sortPosition) {
          setSwaps((count) => count + 1);
        }
        const nextPosition = sortPosition + 1;
        setSortPosition(nextPosition);
        if (nextPosition < reordered.length - 1) {
          setSortMinimumIndex(nextPosition);
          setSortScanIndex(nextPosition + 1);
          setSortPhase("scan");
        }
        return;
      }

      setComparisons((count) => count + 1);
      if (values[sortScanIndex] < values[sortMinimumIndex]) {
        setSortMinimumIndex(sortScanIndex);
      }
      if (sortScanIndex === values.length - 1) {
        setSortPhase("place");
      } else {
        setSortScanIndex((index) => index + 1);
      }
      return;
    }

    const index = mode === "linear" ? linearIndex : midpoint;
    setComparisons((count) => count + 1);
    if (values[index] === target) {
      setFoundAt(index);
    } else if (mode === "linear") {
      setLinearIndex((current) => current + 1);
    } else if (values[index] < target) {
      setLow(index + 1);
    } else {
      setHigh(index - 1);
    }
  }

  const currentValue = values[currentIndex];

  return (
    <section
      aria-labelledby="algorithm-playground-title"
      className="rounded-2xl border border-card-border bg-card p-5 sm:p-7"
    >
      <h2 id="algorithm-playground-title" className="text-xl font-semibold">
        Find or sort the list
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {mode === "selection"
          ? "Watch selection sort find the smallest remaining value, then place it into the next position."
          : <>The target is <strong className="text-foreground">{target}</strong>. Choose a strategy, then reveal one comparison at a time.</>}
      </p>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Algorithm">
        {([
          ["linear", "Linear search"],
          ["binary", "Binary search"],
          ["selection", "Selection sort"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => reset(value)}
            className={`min-h-10 rounded-lg border px-4 text-sm font-medium ${
              mode === value
                ? "border-primary bg-primary/10 text-primary"
                : "border-card-border hover:bg-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {mode === "linear"
          ? "Checks each item in order; the list does not need to be sorted."
          : mode === "binary"
            ? "Checks the middle item and halves the remaining search area; this list is sorted."
            : "Scans the unsorted portion for its smallest value, then places it at the next position."}
      </p>
      <ol
        className="mt-5 grid grid-cols-6 gap-2"
        aria-label={mode === "selection" ? "Values being sorted" : "Search values"}
      >
        {values.map((value, index) => {
          const isCurrent =
            !finished &&
            (mode === "selection"
              ? sortPhase === "scan" && index === currentIndex
              : index === currentIndex);
          const isFound = mode !== "selection" && index === foundAt;
          const isMinimum =
            mode === "selection" &&
            sortPhase === "place" &&
            index === sortMinimumIndex;
          const isSorted =
            mode === "selection" &&
            (finished || index < sortPosition);
          const eliminated =
            mode === "binary" && (index < low || index > high) && !isFound;
          return (
            <li
              key={`${mode}-${index}`}
              aria-label={`Position ${index + 1}: ${value}${isCurrent ? ", current comparison" : ""}${isMinimum ? ", current minimum" : ""}${isSorted ? ", sorted position" : ""}${isFound ? ", found" : ""}`}
              className={`flex aspect-square items-center justify-center rounded-xl border text-lg font-bold tabular-nums transition-colors ${
                isFound
                  ? "border-success bg-success/10 text-success"
                  : isSorted || isMinimum
                    ? "border-success bg-success/10 text-success"
                  : isCurrent
                    ? "border-primary bg-primary/10 text-primary"
                    : eliminated
                      ? "border-card-border bg-muted text-muted-foreground/50"
                      : "border-card-border bg-background"
              }`}
            >
              {value}
            </li>
          );
        })}
      </ol>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {mode === "selection"
            ? finished
              ? `Sorted in ${comparisons} comparisons and ${swaps} swaps.`
              : sortPhase === "place"
                ? `Place ${values[sortMinimumIndex]} in position ${sortPosition + 1}.`
                : `Compare ${values[sortScanIndex]} with the current minimum ${values[sortMinimumIndex]}.`
            : foundAt !== null
              ? `Found ${target} after ${comparisons} ${comparisons === 1 ? "comparison" : "comparisons"}.`
              : finished
                ? `Target not found after ${comparisons} comparisons.`
                : `Comparison ${comparisons + 1}: ${currentValue} ${currentValue === target ? "is the target." : currentValue < target ? "is less than the target." : "is greater than the target."}`}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => reset()}
            className="min-h-10 rounded-lg border border-card-border px-3 text-sm font-semibold hover:bg-muted"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={finished}
            className="min-h-10 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {finished
              ? mode === "selection" ? "Sort complete" : "Search complete"
              : mode === "selection" && sortPhase === "place"
                ? "Place minimum"
                : mode === "selection" ? "Next comparison" : "Next comparison"}
          </button>
        </div>
      </div>
      {mode === "binary" && foundAt !== null && (
        <p className="mt-3 rounded-lg bg-success/10 p-3 text-sm text-success">
          Binary search found the target in {comparisons} comparisons. Its sorted-list requirement lets it discard half the remaining values each step.
        </p>
      )}
    </section>
  );
}

function SignalJourney() {
  const [step, setStep] = useState(0);
  const stop = signalStops[step];

  return (
    <section
      aria-labelledby="signal-journey-title"
      className="rounded-2xl border border-card-border bg-card p-5 sm:p-7"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Request {step + 1} of {signalStops.length}
          </p>
          <div className="mt-4 flex items-start gap-4">
            <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
              {stop.icon}
            </span>
            <div>
              <h2 id="signal-journey-title" className="text-2xl font-bold">
                {stop.title}
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">{stop.detail}</p>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-card-border bg-muted/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              A simplified view
            </p>
            <code className="mt-2 block overflow-x-auto font-mono text-sm text-primary">
              {stop.snippet}
            </code>
          </div>
          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              disabled={step === 0}
              className="min-h-11 rounded-lg border border-card-border px-4 text-sm font-semibold hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Step {step + 1} / {signalStops.length}
            </p>
            <button
              type="button"
              onClick={() =>
                setStep((current) => Math.min(signalStops.length - 1, current + 1))
              }
              disabled={step === signalStops.length - 1}
              className="min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next step
            </button>
          </div>
        </div>
        <nav aria-label="Request journey steps" className="rounded-xl bg-muted/50 p-4">
          <h3 className="font-semibold">Journey map</h3>
          <ol className="mt-3 space-y-2">
            {signalStops.map((item, index) => (
              <li key={item.title}>
                <button
                  type="button"
                  aria-current={step === index ? "step" : undefined}
                  onClick={() => setStep(index)}
                  className={`flex min-h-10 w-full items-center gap-2 rounded-lg px-3 text-left text-sm ${
                    step === index
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  <span>{index < step ? "✓" : index + 1}</span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
          <aside className="mt-4 rounded-lg border border-card-border bg-card p-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
              Key idea
            </h4>
            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              {stop.concept}
            </p>
          </aside>
        </nav>
      </div>
    </section>
  );
}

export default function ActivityExperience({
  activity,
}: {
  activity: ActivityConfig;
}) {
  switch (activity.slug) {
    case "internet-time-machine":
      return <InternetTimeMachine />;
    case "pixel-playground":
      return <PixelPlayground />;
    case "algorithm-playground":
      return <AlgorithmPlayground />;
    case "signal-journey":
      return <SignalJourney />;
    default:
      return null;
  }
}
