import { useQuery } from "@tanstack/react-query";
import { Articles, getArticlesLatest } from ".";
import { QUERY_KEYS } from "@/constants";

/**
 * 最新記事一覧取得フック
 * React Query でキャッシュ・状態管理を自動化
 */
export const useArticlesLatest = () => {
  return useQuery<Articles>({
    queryKey: QUERY_KEYS.ARTICLES_LATEST,
    queryFn: getArticlesLatest,
  });
};
