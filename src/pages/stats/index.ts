import { lazy } from "react";

export const StatsPage = lazy(() =>
  import("./stats.page").then((m) => ({ default: m.StatsPage }))
);
