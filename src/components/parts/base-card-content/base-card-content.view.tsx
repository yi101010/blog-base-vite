import { ReactNode } from "react";
import { CardContentProps } from "@mui/material";
import { StyledCardContent } from "./base-card-content.styled";

/**
 * BaseCard 内部で使用する共通のコンテンツラッパー。
 *
 * - 一貫した `padding` と `gap` を提供。
 * - 子要素を縦に並べるレイアウト。
 * - 必要に応じて他のカード・セクションにも再利用可能。
 * - MUI の CardContentProps（sx, className, componentなど）に対応。
 *
 * @param props.children - 表示する中身
 * @param props その他 MUI の CardContent に渡せる props（sx, className 等）
 *
 * @example
 * <BaseCardContent sx={{ backgroundColor: "grey.100" }}>
 *   <Typography>テキスト</Typography>
 * </BaseCardContent>
 */
export const BaseCardContent = (
  props: CardContentProps & { children: ReactNode }
) => {
  const { children, ...contentProps } = props;

  return <StyledCardContent {...contentProps}>{children}</StyledCardContent>;
};
