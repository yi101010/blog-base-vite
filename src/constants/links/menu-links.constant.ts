import { NavLink } from "@/types";

/**
 * スマホ用のメニューに表示するリンク一覧
 * - サイトの主要なページへのナビゲーションを提供する
 */
export const MENU_LINKS: NavLink[] = [
  { label: "Tags", path: "/tags" },
  { label: "About", path: "/about" },
  { label: "Stats", path: "/stats" },
  { label: "Contact", path: "/contact" },
];
