import { NavLink } from "@/types";

/**
 * カテゴリチップ群に表示するリンク一覧
 * - カテゴリ別のページへのナビゲーションを提供する
 */
export const CATEGORY_LINKS: NavLink[] = [
  { label: "すべて", path: "/" },
  { label: "旅行", path: "/category/travel" },
  { label: "グルメ", path: "/category/gourmet" },
  { label: "ガジェット", path: "/category/gadget" },
  { label: "その他", path: "/category/other" },
];
