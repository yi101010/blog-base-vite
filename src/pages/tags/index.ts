import { lazy } from "react";

export const TagsPage = lazy(() =>
  import("./tags.page").then((m) => ({ default: m.TagsPage }))
);
