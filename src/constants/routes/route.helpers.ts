/**
 * 投稿ページ用のURLを生成する
 * @param id 投稿ID
 * @returns `/post/:id` 形式のURL
 */
export const generatePostPath = (id: string): string => `/post/${id}`;

/**
 * 投稿ページ内のコメント欄へのURLを生成する
 * @param id 投稿ID
 * @returns `/post/:id#comment` 形式のURL
 */
export const generatePostCommentPath = (id: string): string =>
  `${generatePostPath(id)}#comment`;
