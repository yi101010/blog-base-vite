import { apiClient } from "@/libs";
import { Articles, ArticlesSchema } from ".";
import { API_PATHS } from "@/constants";

/**
 * 最新記事一覧を取得するAPI
 * 現状は静的JSONファイルから取得
 */
export const getArticlesLatest = async (): Promise<Articles> => {
  const res = await apiClient.get(API_PATHS.ARTICLES_LATEST);
  return ArticlesSchema.parse(res.data);
};
