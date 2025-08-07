/**
 * カード一覧で使用される記事情報のプロパティ型
 */
export type CardListItemProps = {
  /** 記事ID。ルーティングに使用される */
  id: string;

  /** 画像のパス。指定がなければデフォルト画像を使用 */
  imgPath?: string;

  /** 記事タイトル。2〜3行に省略して表示される */
  title: string;

  /** カテゴリ名。Chipとして表示される（任意） */
  category?: string;

  /** 公開日時。フォーマット済み文字列を想定 */
  publishedAt: string;

  /** コメント数（任意・未指定時は0） */
  commentCount?: number;

  /** お気に入り状態（trueで塗りつぶしアイコン） */
  isFavorite?: boolean;

  /** お気に入りボタン押下時のコールバック（任意） */
  onClickFavorite?: () => void;
};
