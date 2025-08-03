import { CardListItemProps } from "@/components";

/**
 * カード一覧コンポーネントのプロパティ型
 */
export type CardListProps = {
  /** 表示する記事情報の配列 */
  items: CardListItemProps[];
  /** 現在のページ番号（1始まり） */
  page: number;
  /** 総ページ数 */
  count: number;
  /** ページ変更時のイベントハンドラ */
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};
