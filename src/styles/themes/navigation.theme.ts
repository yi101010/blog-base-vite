/**
 * Navigation 系コンポーネントのテーマ定義
 *
 * 以下の MUI コンポーネントをカスタマイズ：
 * - MuiMenuItem: メニュー項目のパディングと選択状態を調整
 * - MuiMenu: メニューリストとペーパーのスタイルを調整
 * - MuiSelect: セレクトボックスのボーダーやアイコンをカスタマイズ
 * - MuiLink: リンクのアニメーションとフォーカススタイルを定義
 * - MuiDrawer: ドロワーの背景色をカスタマイズ
 * - MuiPaginationItem: 選択状態の色を調整
 * - MuiTabs: インジケーター色と最小高さを定義
 * - MuiTab: ホバー時や選択状態の色、パディングを調整
 * - MuiStepConnector: ステップ間の線の色と角丸を設定
 * - MuiStepIcon: ステップアイコンのサイズ、色、状態ごとのスタイルをカスタマイズ
 * - MuiStepLabel: 完了状態の不透明度を定義
 */

import { Theme, alpha, Components } from "@mui/material/styles";
import { buttonBaseClasses } from "@mui/material/ButtonBase";
import { dividerClasses } from "@mui/material/Divider";
import { menuItemClasses } from "@mui/material/MenuItem";
import { selectClasses } from "@mui/material/Select";
import { tabClasses } from "@mui/material/Tab";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { gray, brand } from "./base.theme";
import { createElement, forwardRef } from "react";
import type { ComponentProps } from "react";

export const navigationTheme: Components<Theme> = {
  /** MuiMenuItem: メニュー項目のパディングと選択状態を調整 */
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: "6px 8px",
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: "transparent",
        },
        [`&.${menuItemClasses.selected}.${menuItemClasses.focusVisible}`]: {
          backgroundColor: alpha(gray[300], 0.3),
        },
      },
    },
  },

  /** MuiMenu: メニューリストとペーパーのスタイルを調整 */
  MuiMenu: {
    styleOverrides: {
      list: {
        gap: 0,
        [`& .${dividerClasses.root}`]: {
          margin: "0 -8px",
        },
      },
      paper: {
        marginTop: 4,
        borderRadius: 8,
        border: `1px solid ${gray[200]}`,
        background: "hsl(0, 0%, 100%)",
        backgroundImage: "none",
        boxShadow:
          "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px",
        [`& .${buttonBaseClasses.root}.Mui-selected`]: {
          backgroundColor: alpha(gray[300], 0.3),
        },
      },
    },
  },

  /** MuiSelect: セレクトボックスのボーダーやアイコンをカスタマイズ */
  MuiSelect: {
    defaultProps: {
      IconComponent: forwardRef<
        SVGSVGElement,
        ComponentProps<typeof UnfoldMoreRoundedIcon>
      >((props, ref) =>
        createElement(UnfoldMoreRoundedIcon, {
          ...props,
          fontSize: "small",
          ref,
        })
      ),
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        border: "1px solid",
        borderColor: gray[200],
        backgroundColor: "white",
        boxShadow:
          "inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)",
        "&:hover": {
          borderColor: gray[300],
          backgroundColor: "white",
          boxShadow: "none",
        },
        [`&.${selectClasses.focused}`]: {
          outlineOffset: 0,
          borderColor: gray[400],
        },
        "&:before, &:after": {
          display: "none",
        },
      },
      select: {
        display: "flex",
        alignItems: "center",
      },
    },
  },

  /** MuiLink: リンクのアニメーションとフォーカススタイルを定義 */
  MuiLink: {
    defaultProps: {
      underline: "none",
    },
    styleOverrides: {
      root: {
        color: gray[900],
        fontWeight: 500,
        position: "relative",
        textDecoration: "none",
        width: "fit-content",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "1px",
          bottom: 0,
          left: 0,
          backgroundColor: gray[500],
          opacity: 0.3,
          transition: "width 0.3s ease, opacity 0.3s ease",
        },
        "&:hover::before": {
          width: 0,
        },
        "&:focus-visible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: 4,
          borderRadius: 2,
        },
      },
    },
  },

  /** MuiDrawer: ドロワーの背景色をカスタマイズ */
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: gray[50],
      },
    },
  },

  /** MuiPaginationItem: 選択状態の色を調整 */
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          color: "white",
          backgroundColor: gray[900],
        },
      },
    },
  },

  /** MuiTabs: インジケーター色と最小高さを定義 */
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: "fit-content" },
      indicator: {
        backgroundColor: gray[800],
      },
    },
  },

  /** MuiTab: ホバー時や選択状態の色、パディングを調整 */
  MuiTab: {
    styleOverrides: {
      root: {
        padding: "6px 8px",
        marginBottom: 8,
        textTransform: "none",
        minWidth: "fit-content",
        minHeight: "fit-content",
        color: gray[500],
        borderRadius: 8,
        border: "1px solid transparent",
        ":hover": {
          color: gray[900],
          backgroundColor: gray[100],
          borderColor: gray[200],
        },
        [`&.${tabClasses.selected}`]: {
          color: gray[900],
        },
      },
    },
  },

  /** MuiStepConnector: ステップ間の線の色と角丸を設定 */
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderTop: "1px solid",
        borderColor: gray[300],
        flex: 1,
        borderRadius: 99,
      },
    },
  },

  /** MuiStepIcon: ステップアイコンのサイズ、色、状態ごとのスタイルをカスタマイズ */
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: "transparent",
        border: `1px solid ${gray[400]}`,
        width: 12,
        height: 12,
        borderRadius: "50%",
        "& text": {
          display: "none",
        },
        "&.Mui-active": {
          border: "none",
          color: brand[500],
        },
        "&.Mui-completed": {
          border: "none",
          color: brand[300],
        },
      },
    },
  },

  /** MuiStepLabel: 完了状態の不透明度を定義 */
  MuiStepLabel: {
    styleOverrides: {
      label: {
        "&.Mui-completed": {
          opacity: 0.6,
        },
      },
    },
  },
};
