"use client";

import { ChartHarness } from "@davvidbaker/flame-chart/flambe";
import { useMemo } from "react";

import { createSampleTrace } from "./sampleTrace";

export default function DemoChart() {
  const fixture = useMemo(() => createSampleTrace(), []);
  return <ChartHarness fixture={fixture} height={520} />;
}
