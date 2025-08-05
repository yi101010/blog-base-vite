/**
 * @file query.constant.ts
 * @description React Query の queryKey 定義
 */
export const QUERY_KEYS = {
  /** 最新記事一覧 */
  ARTICLES_LATEST: ["ARTICLES_LATEST"] as const,

  /** カテゴリ別記事一覧 */
  ARTICLES_BY_CATEGORY: (category: string) =>
    ["ARTICLES_BY_CATEGORY", category] as const,

} as const;
