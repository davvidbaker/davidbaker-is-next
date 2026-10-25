"use client";

import dynamic from "next/dynamic";

const DemoChart = dynamic(() => import("./DemoChart"), {
  ssr: false,
  loading: () => <p style={{ color: "#888" }}>Loading chart…</p>,
});

export default DemoChart;
