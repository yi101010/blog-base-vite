import { lazy } from "react";

export const ArchivePage = lazy(() =>
  import("./archive.page").then((m) => ({ default: m.ArchivePage }))
);
