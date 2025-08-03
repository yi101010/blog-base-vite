import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

/**
 * ページネーション状態管理フック
 * @param basePath ベースパス（例: "/blog"）
 */
export const usePagination = (basePath: string) => {
  const navigate = useNavigate();
  const params = useParams<{ page?: string }>();

  // URLから初期ページを取得（なければ1）
  const initialPage = params.page ? Number(params.page) : 1;
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  /** ページ変更時にURLを更新 */
  const onChange = (_: unknown, value: number) => {
    if (value === 1) {
      navigate(basePath); // 1ページ目は /page/ なし
    } else {
      navigate(`${basePath}/page/${value}/`);
    }
  };

  return { page, setPage, onChange };
};
