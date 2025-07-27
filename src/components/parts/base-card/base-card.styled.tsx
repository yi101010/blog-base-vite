import { Card, styled } from "@mui/material";

/**
 * アプリ全体で再利用可能なベースカードコンポーネント。
 *
 * - 垂直方向に要素を並べる `flex column` レイアウト。
 * - ホバー時に背景が透明になり、カーソルがポインターに変化。
 * - キーボードフォーカス時にアクセシビリティ対応のアウトラインが表示される。
 *
 * @see {@link https://mui.com/material-ui/react-card/ MUI Card Documentation}
 */
export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));
