"use client";

import { ChartHarness, createAppChartFixture } from "@davvidbaker/flame-chart/flambe";
import { useMemo } from "react";

export default function DemoChart() {
  const fixture = useMemo(() => createAppChartFixture(), []);
  return <ChartHarness fixture={fixture} height={520} />;
}
