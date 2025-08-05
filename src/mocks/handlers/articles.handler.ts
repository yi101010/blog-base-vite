/**
 * @file articles.handler.ts
 * @description 記事関連APIのMSWモックハンドラ
 */

import { rest } from "msw";
import { API_PATHS } from "@/constants";

export const articlesHandlers = [
  rest.get(API_PATHS.ARTICLES_LATEST, (_req, res, ctx) => {
    const articles = Array.from({ length: 100 }, (_, i) => {
      const id = (i + 1).toString();
      const date = new Date();
      date.setDate(date.getDate() - i); // 日付を1日ずつずらす

      return {
        id,
        imgPath: `https://picsum.photos/400/300?random=${i + 1}`,
        title: `記事タイトル${id}。ここにタイトルが入ります。`,
        category: `カテゴリ${String.fromCharCode(65 + (i % 5))}`, // A〜E
        publishedAt: date.toISOString().slice(0, 16).replace("T", " "),
        commentCount: Math.floor(Math.random() * 15), // 0〜14件
      };
    });

    return res(ctx.status(200), ctx.json(articles));
  }),
];
