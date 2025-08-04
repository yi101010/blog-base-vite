/**
 * @file articles.handler.ts
 * @description 記事関連APIのMSWモックハンドラ
 */

import { rest } from "msw";

export const articlesHandlers = [
  rest.get("/data/articles/latest.json", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: "1", title: "Mock Latest Article", publishedAt: "2025-08-03" },
        { id: "2", title: "Another Mock Article", publishedAt: "2025-08-02" },
      ])
    );
  }),
];
