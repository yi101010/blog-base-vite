import { CardContent, styled } from "@mui/material";

/**
 * BaseCard 内で使用される、再利用可能なカードコンテンツ領域。
 *
 * - 垂直方向に要素を並べる `flex column` レイアウト。
 * - 一貫した余白（padding）と間隔（gap）を提供。
 * - 最終行の余白も固定化し、レイアウトのブレを防止。
 *
 * @see {@link https://mui.com/material-ui/api/card-content/ MUI CardContent Documentation}
 */
export const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
});
