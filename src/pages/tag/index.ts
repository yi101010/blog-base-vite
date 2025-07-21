import { lazy } from "react";

export const TagPage = lazy(() =>
  import("./tag.page").then((m) => ({ default: m.TagPage }))
);
