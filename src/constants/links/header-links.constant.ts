import { NavLink } from "@/types";

/**
 * ヘッダーに表示するリンク一覧
 * - サイトの主要なページへのナビゲーションを提供する
 */
export const HEADER_LINKS: NavLink[] = [
  { label: "Tags", path: "/tags" },
  { label: "About", path: "/about" },
  { label: "Stats", path: "/stats" },
  { label: "Contact", path: "/contact" },
];
