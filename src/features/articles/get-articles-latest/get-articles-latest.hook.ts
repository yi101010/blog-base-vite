import { useQuery } from "@tanstack/react-query";
import { Articles, getArticlesLatest } from ".";

/**
 * 最新記事一覧取得フック
 * React Query でキャッシュ・状態管理を自動化
 */
export const useArticlesLatest = () => {
  return useQuery<Articles>({
    queryKey: ["ARTICLES_LATEST"],
    queryFn: getArticlesLatest,
    staleTime: 1000 * 60 * 5, // 5分
  });
};
