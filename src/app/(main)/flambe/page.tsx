import DemoChart from "./DemoChart";

export const metadata = {
  title: "Flambe demo — David Baker",
  description: "A static flame-chart demo. Not a live Flambe trace.",
};

export default function FlambePage() {
  return (
    <main style={{ maxWidth: "50rem", margin: "0 auto", padding: "0 20px 3rem" }}>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Flambe chart demo</h1>
      <p style={{ color: "#666", marginTop: 0 }}>
        Hand-built fixture spans rendered with{" "}
        <code>@davvidbaker/flame-chart</code>. This is not live work and not
        connected to the private Flambe dashboard.
      </p>
      <DemoChart />
      <p style={{ color: "#555", lineHeight: 1.5, marginTop: "1.5rem" }}>
        Flambe itself stays login-gated. The public site can show this widget or
        the existing screenshot on{" "}
        <a href="/hacking">Projects</a>. Which one should be the public face is
        still open.
      </p>
    </main>
  );
}
