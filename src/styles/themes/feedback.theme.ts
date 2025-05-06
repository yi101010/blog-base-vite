/**
 * Feedback 系コンポーネントのテーマ定義
 *
 * 以下の MUI コンポーネントをカスタマイズ：
 * - MuiAlert: 背景色・ボーダー・アイコン色のカスタマイズ
 * - MuiDialog: ダイアログ枠線のスタイル調整
 * - MuiLinearProgress: プログレスバーの色・角丸調整
 */

import { Theme, alpha, Components } from "@mui/material/styles";
import { gray, orange } from "./base.theme";

export const feedbackTheme: Components<Theme> = {
  /** MuiAlert: 背景色・枠線・アイコン色をカスタマイズ */
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        backgroundColor: orange[100],
        color: theme.palette.text.primary,
        border: `1px solid ${alpha(orange[300], 0.5)}`,
        "& .MuiAlert-icon": {
          color: orange[500],
        },
      }),
    },
  },
  /** MuiDialog: ダイアログのボーダー・角丸設定 */
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiDialog-paper": {
          borderRadius: "10px",
          border: "1px solid",
          borderColor: theme.palette.divider,
        },
      }),
    },
  },
  /** MuiLinearProgress: プログレスバーの色と角丸設定 */
  MuiLinearProgress: {
    styleOverrides: {
      root: () => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
      }),
    },
  },
};
