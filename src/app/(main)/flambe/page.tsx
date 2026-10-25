import DemoChart from "./ClientDemoChart";

export const metadata = {
  title: "Flambé demo — David Baker",
  description: "Flambé's flame chart, embedded from npm with sample data.",
};

export default function FlambePage() {
  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 20px 3rem" }}>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Flambé</h1>
      <p style={{ color: "#666", marginTop: 0 }}>
        Flambé&apos;s real flame chart, embedded from{" "}
        <a href="https://www.npmjs.com/package/@davvidbaker/flame-chart">
          <code>@davvidbaker/flame-chart</code>
        </a>
        . The data is a built-in sample, not live work. Pan and zoom around.
      </p>
      <DemoChart />
      <p style={{ color: "#555", lineHeight: 1.5, marginTop: "1.5rem" }}>
        Source is on <a href="https://github.com/davvidbaker/flambe">GitHub</a>.
      </p>
    </main>
  );
}
