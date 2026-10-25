"use client";

import { FlameChart, type FlameSpan } from "@davvidbaker/flame-chart";
import { useState } from "react";

/** Hand-built fixture. Not a live Flambe trace. */
const DEMO_SPANS: FlameSpan[] = [
  { id: "root", label: "Ship a weekend sketch", start: 0, end: 12000, lane: "you", depth: 0 },
  { id: "look", label: "Look around the repo", start: 400, end: 2800, lane: "you", depth: 1 },
  { id: "draw", label: "Draw the first chart", start: 3000, end: 8200, lane: "you", depth: 1 },
  { id: "tweak", label: "Tweak colors", start: 8400, end: 11000, lane: "you", depth: 1 },
  { id: "agent", label: "Ask an agent for a second opinion", start: 2500, end: 9800, lane: "agent", depth: 0 },
  { id: "read", label: "Read the chart package", start: 2700, end: 5100, lane: "agent", depth: 1 },
  { id: "note", label: "Write a short note", start: 5400, end: 9400, lane: "agent", depth: 1 },
];

export default function DemoChart() {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const selected = DEMO_SPANS.find((span) => span.id === selectedId);

  return (
    <div>
      <FlameChart
        spans={DEMO_SPANS}
        height={220}
        selectedSpanId={selectedId}
        onSpanClick={({ span }) => setSelectedId(span.id)}
        onBackgroundClick={() => setSelectedId(null)}
      />
      <p style={{ color: "#555", fontSize: "0.9rem", marginTop: "0.75rem" }}>
        {selected
          ? `Selected: ${selected.label}`
          : "Click a bar. This is a fixture, not live work from Flambe."}
      </p>
    </div>
  );
}
