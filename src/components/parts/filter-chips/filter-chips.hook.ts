import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";

/**
 * FilterChips コンポーネントの選択状態と変更処理を提供するフック
 *
 * @param basePath ルーティングのベースパス（例: "category", "archive"）
 * @returns 選択値と変更関数を含むオブジェクト
 */
export const useFilterChips = (basePath: string) => {
  const params = useParams();
  const selected = params["*"] ?? ""; // 例: /category/design の "design"

  const navigate = useNavigate();

  /** 選択肢がクリックされたときに実行される処理 */
  const onChange = useCallback(
    (value: string | number) => {
      navigate(`/${basePath}/${value}`);
    },
    [navigate, basePath]
  );

  return {
    selected,
    onChange,
  };
};
