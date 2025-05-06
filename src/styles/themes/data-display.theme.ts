/**
 * Data Display 系コンポーネントのテーマ定義
 *
 * 以下の MUI コンポーネントをカスタマイズ
 * - MuiList: リスト全体のスタイルを調整
 * - MuiListItem: 選択・ホバー時の背景やアイコンの色を変更
 * - MuiListItemText: primary/secondary テキストのフォントサイズとウェイトを調整
 * - MuiListSubheader: サブヘッダーの背景とフォントスタイルを設定
 * - MuiListItemIcon: 最小幅を削除して余白を調整
 * - MuiChip: ラベル・アイコンの色、背景色、ボーダーをカスタマイズ
 * - MuiTablePagination: ページネーションボタンのレイアウト・サイズを調整
 * - MuiIcon: デフォルトの fontSize を small にし、フォントサイズを調整
 */

import { Theme, alpha, Components } from "@mui/material/styles";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { typographyClasses } from "@mui/material/Typography";
import { buttonBaseClasses } from "@mui/material/ButtonBase";
import { chipClasses } from "@mui/material/Chip";
import { iconButtonClasses } from "@mui/material/IconButton";
import { gray, red, green } from "./base.theme";

export const dataDisplayTheme: Components<Theme> = {
  /** MuiList: リスト全体のパディングと方向を設定 */
  MuiList: {
    styleOverrides: {
      root: {
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      },
    },
  },
  /** MuiListItem: アイコンとテキストのスタイル、選択時・ホバー時の背景色を指定 */
  MuiListItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${svgIconClasses.root}`]: {
          width: "1rem",
          height: "1rem",
          color: theme.palette.text.secondary,
        },
        [`& .${typographyClasses.root}`]: {
          fontWeight: 500,
        },
        [`& .${buttonBaseClasses.root}`]: {
          display: "flex",
          gap: 8,
          padding: "2px 8px",
          borderRadius: theme.shape.borderRadius,
          opacity: 0.7,
          "&.Mui-selected": {
            opacity: 1,
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
            [`& .${svgIconClasses.root}`]: {
              color: theme.palette.text.primary,
            },
            "&:focus-visible": {
              backgroundColor: alpha(theme.palette.action.selected, 0.3),
            },
            "&:hover": {
              backgroundColor: alpha(theme.palette.action.selected, 0.5),
            },
          },
          "&:focus-visible": {
            backgroundColor: "transparent",
          },
        },
      }),
    },
  },
  /** MuiListItemText: primary/secondary テキストのフォントサイズ調整 */
  MuiListItemText: {
    styleOverrides: {
      primary: ({ theme }) => ({
        fontSize: theme.typography.body2.fontSize,
        fontWeight: 500,
        lineHeight: theme.typography.body2.lineHeight,
      }),
      secondary: ({ theme }) => ({
        fontSize: theme.typography.caption.fontSize,
        lineHeight: theme.typography.caption.lineHeight,
      }),
    },
  },
  /** MuiListSubheader: キャプションフォントと背景設定 */
  MuiListSubheader: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: "transparent",
        padding: "4px 8px",
        fontSize: theme.typography.caption.fontSize,
        fontWeight: 500,
        lineHeight: theme.typography.caption.lineHeight,
      }),
    },
  },
  /** MuiListItemIcon: 最小幅の削除 */
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 0,
      },
    },
  },
  /** MuiChip: 状態や色ごとにスタイルをカスタマイズ */
  MuiChip: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        border: "1px solid",
        borderRadius: "999px",
        [`& .${chipClasses.label}`]: {
          fontWeight: 600,
        },
        variants: [
          {
            props: { color: "default" },
            style: {
              borderColor: gray[200],
              backgroundColor: gray[100],
              [`& .${chipClasses.label}`]: { color: gray[500] },
              [`& .${chipClasses.icon}`]: { color: gray[500] },
            },
          },
          {
            props: { color: "success" },
            style: {
              borderColor: green[200],
              backgroundColor: green[50],
              [`& .${chipClasses.label}`]: { color: green[500] },
              [`& .${chipClasses.icon}`]: { color: green[500] },
            },
          },
          {
            props: { color: "error" },
            style: {
              borderColor: red[100],
              backgroundColor: red[50],
              [`& .${chipClasses.label}`]: { color: red[500] },
              [`& .${chipClasses.icon}`]: { color: red[500] },
            },
          },
          {
            props: { size: "small" },
            style: {
              maxHeight: 20,
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.caption.fontSize,
              },
              [`& .${svgIconClasses.root}`]: {
                fontSize: theme.typography.caption.fontSize,
              },
            },
          },
          {
            props: { size: "medium" },
            style: {
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.caption.fontSize,
              },
            },
          },
        ],
      }),
    },
  },
  /** MuiTablePagination: ページ送りのボタンサイズ・間隔の調整 */
  MuiTablePagination: {
    styleOverrides: {
      actions: {
        display: "flex",
        gap: 8,
        marginRight: 6,
        [`& .${iconButtonClasses.root}`]: {
          minWidth: 0,
          width: 36,
          height: 36,
        },
      },
    },
  },
  /** MuiIcon: fontSize を 1rem に固定（small） */
  MuiIcon: {
    defaultProps: {
      fontSize: "small",
    },
    styleOverrides: {
      root: {
        variants: [
          {
            props: { fontSize: "small" },
            style: { fontSize: "1rem" },
          },
        ],
      },
    },
  },
};
