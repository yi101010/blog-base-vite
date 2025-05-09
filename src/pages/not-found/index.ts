import { lazy } from "react";

export const NotFoundPage = lazy(() =>
  import("./not-found.page").then((m) => ({ default: m.NotFoundPage }))
);
