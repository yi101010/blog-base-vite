/**
 * 表示するオプション項目
 * - label: 表示ラベル
 * - value: URLパスなどで使用する値（例: "product", 2024 など）
 */
export type FilterOption<T extends string | number = string> = {
  /** 表示用のラベル（例: "All", "Product", "2024"） */
  label: string;

  /** URLなどで使用する値（例: "product", 2024 など） */
  value: T;
};

/**
 * FilterChips コンポーネントの props
 */
export type FilterChipsProps<T extends string | number = string> = {
  /** 選択肢一覧（表示ラベルと遷移値を持つ） */
  options: FilterOption<T>[];

  /** 現在選択されている値 */
  selected: T;

  /** 値変更時に呼び出されるコールバック（任意） */
  onChange?: (value: T) => void;

  /** 遷移先のルートパス（例: "category", "archive"） */
  basePath: string;
};
