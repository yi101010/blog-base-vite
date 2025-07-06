import { lazy } from "react";

export const AboutPage = lazy(() =>
  import("./about.page").then((m) => ({ default: m.AboutPage }))
);
