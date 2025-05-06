/**
 * Surfaces 系コンポーネントのテーマ定義
 *
 * 以下の MUI コンポーネントをカスタマイズ：
 * - MuiAccordion: 背景色・枠線・角丸・パディングを調整
 * - MuiAccordionSummary: ホバー時の背景色を設定
 * - MuiAccordionDetails: 下マージンや枠線をリセット
 * - MuiPaper: デフォルトの影を無効化
 * - MuiCard: 背景色・枠線・角丸・バリアントごとのスタイルを調整
 * - MuiCardContent: パディングをリセット
 * - MuiCardHeader: パディングをリセット
 * - MuiCardActions: パディングをリセット
 */

import { alpha, Theme, Components } from "@mui/material/styles";
import { gray } from "./base.theme";

export const surfacesTheme: Components<Theme> = {
  /** MuiAccordion: 背景色・枠線・角丸・パディングを調整 */
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
      disableGutters: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 4,
        overflow: "clip",
        backgroundColor: theme.palette.background.default,
        border: "1px solid",
        borderColor: theme.palette.divider,
        ":before": {
          backgroundColor: "transparent",
        },
        "&:not(:last-of-type)": {
          borderBottom: "none",
        },
        "&:first-of-type": {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        },
        "&:last-of-type": {
          borderBottomLeftRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
        },
      }),
    },
  },

  /** MuiAccordionSummary: ホバー時の背景色を設定 */
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: "none",
        borderRadius: 8,
        "&:hover": { backgroundColor: gray[50] },
        "&:focus-visible": { backgroundColor: "transparent" },
        ...theme.applyStyles("dark", {
          "&:hover": { backgroundColor: gray[800] },
        }),
      }),
    },
  },

  /** MuiAccordionDetails: 下マージンや枠線をリセット */
  MuiAccordionDetails: {
    styleOverrides: {
      root: { mb: 20, border: "none" },
    },
  },

  /** MuiPaper: デフォルトの影を無効化 */
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
  },

  /** MuiCard: 背景色・枠線・角丸・バリアントごとのスタイルを調整 */
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 16,
        gap: 16,
        transition: "all 100ms ease",
        backgroundColor: gray[50],
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: "none",
        ...theme.applyStyles("dark", {
          backgroundColor: gray[800],
        }),
        variants: [
          {
            props: {
              variant: "outlined",
            },
            style: {
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: "none",
              background: "hsl(0, 0%, 100%)",
              ...theme.applyStyles("dark", {
                background: alpha(gray[900], 0.4),
              }),
            },
          },
        ],
      }),
    },
  },

  /** MuiCardContent: パディングをリセット */
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        "&:last-child": { paddingBottom: 0 },
      },
    },
  },

  /** MuiCardHeader: パディングをリセット */
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },

  /** MuiCardActions: パディングをリセット */
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
};
