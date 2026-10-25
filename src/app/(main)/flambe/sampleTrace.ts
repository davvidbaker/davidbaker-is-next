import type {
  Activity,
  AppChartFixture,
  Thread,
  TraceEvent,
} from "@davvidbaker/flame-chart/flambe";

const MINUTE = 60 * 1000;

const categories = [
  { id: 1, name: "coding", color_background: "#efc360", color_text: "#000000" },
  { id: 2, name: "investigation", color_background: "#60a5fa", color_text: "#000000" },
  { id: 3, name: "writing", color_background: "#a78bfa", color_text: "#000000" },
];

export function createSampleTrace(now = Date.now()): AppChartFixture {
  const ago = (minutes: number) => now - minutes * MINUTE;

  const site: Thread = { id: 1, name: "personal site 🌐", rank: 0 };
  const swyzzle: Thread = { id: 2, name: "swyzzle 🫠", rank: 1 };

  const make = (thread: Thread, fields: Omit<Activity, "thread" | "thread_id">): Activity => ({
    ...fields,
    thread,
    thread_id: thread.id,
  });

  const refresh = make(site, { id: 10, name: "Bring the site up to date", categories: [1] });
  const blurb = make(site, { id: 11, name: "Rewrite the homepage blurb", parent_id: 10, categories: [3] });
  const projects = make(site, { id: 12, name: "Update project statuses", parent_id: 10, categories: [1] });
  const deploy = make(site, { id: 13, name: "Figure out why it didn't deploy", parent_id: 10, categories: [2] });
  const buildFix = make(site, { id: 14, name: "Fix the production build", parent_id: 13, categories: [1] });

  const melt = make(swyzzle, { id: 20, name: "Resurrect the screen melt", categories: [1] });
  const shaders = make(swyzzle, { id: 21, name: "Restore classic shaders", parent_id: 20, categories: [1] });
  const menuBar = make(swyzzle, { id: 22, name: "Move into the menu bar", parent_id: 20, categories: [1] });

  const events: TraceEvent[] = [
    { id: 101, timestamp: ago(95), phase: "B", activity: melt },
    { id: 102, timestamp: ago(92), phase: "B", activity: shaders },
    { id: 103, timestamp: ago(70), phase: "E", activity: shaders },
    { id: 104, timestamp: ago(68), phase: "B", activity: menuBar },
    { id: 105, timestamp: ago(60), phase: "S", activity: melt, message: "Back to the site" },
    { id: 106, timestamp: ago(60), phase: "B", activity: refresh },
    { id: 107, timestamp: ago(58), phase: "B", activity: blurb },
    { id: 108, timestamp: ago(46), phase: "E", activity: blurb },
    { id: 109, timestamp: ago(44), phase: "B", activity: projects },
    { id: 110, timestamp: ago(34), phase: "E", activity: projects },
    { id: 111, timestamp: ago(32), phase: "B", activity: deploy },
    { id: 112, timestamp: ago(28), phase: "B", activity: buildFix },
    { id: 113, timestamp: ago(16), phase: "E", activity: buildFix },
    { id: 114, timestamp: ago(14), phase: "E", activity: deploy },
    { id: 115, timestamp: ago(12), phase: "E", activity: refresh },
    { id: 116, timestamp: ago(10), phase: "R", activity: melt, message: "Back to swyzzling" },
  ];

  return {
    traceId: 1,
    traceName: "sample",
    threads: [site, swyzzle],
    categories,
    events,
    attentionShifts: [
      { thread_id: swyzzle.id, timestamp: ago(95) },
      { thread_id: site.id, timestamp: ago(60) },
      { thread_id: swyzzle.id, timestamp: ago(10) },
    ],
  };
}
