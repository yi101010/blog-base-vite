import { z } from "zod";

/**
 * 記事スキーマ
 */
export const ArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string().optional(),
  publishedAt: z.string(),
  imgPath: z.string().optional(),
  commentCount: z.number().optional(),
});

/**
 * 記事一覧スキーマ
 */
export const ArticlesSchema = z.array(ArticleSchema);

/**
 * 型定義
 */
export type Article = z.infer<typeof ArticleSchema>;
export type Articles = z.infer<typeof ArticlesSchema>;
