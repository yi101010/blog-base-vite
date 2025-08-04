import { apiClient } from "@/libs";
import { Articles, ArticlesSchema } from ".";

/**
 * 最新記事一覧を取得するAPI
 * 現状は静的JSONファイルから取得
 */
export const getArticlesLatest = async (): Promise<Articles> => {
  const res = await apiClient.get("/data/articles/latest.json");
  return ArticlesSchema.parse(res.data);
};
