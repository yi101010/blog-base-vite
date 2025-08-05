/**
 * @file api.constant.ts
 * @description APIエンドポイントパス定義
 */
export const API_PATHS = {
  /** 最新記事一覧 */
  ARTICLES_LATEST: "/data/articles/latest.json",

  /** カテゴリ別記事一覧 */
  ARTICLES_BY_CATEGORY: (category: string) =>
    `/data/articles/category/${category}.json`,
} as const;
