/**
 * ナビゲーションリンクの共通型定義
 * - `label`: 表示テキスト
 * - `path`: リンク先のURLパス（相対 or 絶対）
 */
export type NavLink = {
  label: string;
  path: string;
};
