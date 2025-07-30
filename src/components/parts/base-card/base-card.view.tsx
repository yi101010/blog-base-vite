import { CardProps } from "@mui/material";
import { ReactNode } from "react";
import { StyledCard } from "./base-card.styled";
import { LinkProps } from "react-router-dom";

/**
 * アプリ全体で再利用可能なベースカードコンポーネント。
 *
 * - MUI `Card` の拡張として、クリックやフォーカス時のスタイルを追加。
 * - 内部には自動的に `CardContent` 相当のラッパーを適用。
 * - 一覧表示・情報カード・モーダルなど幅広いUIで使用可能。
 *
 * @param props.variant - MUI標準の `Card` variant（例: "outlined"）
 * @param props.children - 表示する中身（任意のReactNode）
 * @param props その他 `CardProps`（例: onClick など）
 *
 * @example
 * <BaseCard variant="outlined">
 *   <Typography variant="caption">Company</Typography>
 *   <Typography variant="h6">Title</Typography>
 * </BaseCard>
 */
export const BaseCard = (
  props: CardProps & LinkProps & { children: ReactNode }
) => {
  const { children, ...cardProps } = props;

  return <StyledCard {...cardProps}>{children}</StyledCard>;
};
