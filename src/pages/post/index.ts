import { lazy } from "react";

export const PostPage = lazy(() =>
  import("./post.page").then((m) => ({ default: m.PostPage }))
);
