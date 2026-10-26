"use client";

import { ChartHarness } from "@davvidbaker/flame-chart/flambe";
import { useEffect, useMemo, useRef } from "react";

import { createSampleTrace } from "./sampleTrace";

export default function DemoChart() {
  const fixture = useMemo(() => createSampleTrace(), []);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // The chart's wheel listeners are passive and stop propagation, so lock the page in the capture phase.
    const lock = (e: WheelEvent) => e.preventDefault();
    el.addEventListener("wheel", lock, { passive: false, capture: true });
    return () => el.removeEventListener("wheel", lock, { capture: true });
  }, []);

  return (
    <div ref={ref} style={{ overscrollBehavior: "contain", touchAction: "none" }}>
      <ChartHarness fixture={fixture} height={520} />
    </div>
  );
}
