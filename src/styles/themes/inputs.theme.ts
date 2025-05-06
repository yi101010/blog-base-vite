/**
 * Inputs 系コンポーネントのテーマ定義
 *
 * 以下の MUI コンポーネントをカスタマイズ：
 * - MuiButtonBase: リップル無効・フォーカス可視化
 * - MuiButton: サイズ・色・バリアントごとのスタイルを調整
 * - MuiIconButton: 枠線・背景・サイズ別スタイルを調整
 * - MuiToggleButtonGroup: 選択時の色・シャドウ調整
 * - MuiToggleButton: 選択状態のスタイル調整
 * - MuiCheckbox: アイコン・色・状態別スタイルを調整
 * - MuiInputBase: プレースホルダーの色設定
 * - MuiOutlinedInput: 枠線・背景色・フォーカススタイルなどを調整
 * - MuiInputAdornment: アイコンの色調整
 * - MuiFormLabel: キャプションとしてのスタイル調整
 */

import { alpha, Theme, Components } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { gray, brand } from "./base.theme";
import { createElement } from "react";

export const inputsTheme: Components<Theme> = {
  /** MuiButtonBase: リップル無効・フォーカス時のアウトライン表示 */
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: "border-box",
        transition: "all 100ms ease-in",
        "&:focus-visible": {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: "2px",
        },
      }),
    },
  },

  /** MuiButton: サイズ・バリアント・カラーごとのスタイル定義 */
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
      }),
    },
  },

  /** MuiIconButton: 枠線・背景・サイズ別スタイル調整 */
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        color: theme.palette.text.primary,
        border: "1px solid ",
        borderColor: gray[200],
        backgroundColor: alpha(gray[50], 0.3),
        "&:hover": {
          backgroundColor: gray[100],
          borderColor: gray[300],
        },
        "&:active": {
          backgroundColor: gray[200],
        },
        ...theme.applyStyles("dark", {
          color: gray[50],
          backgroundColor: gray[800],
          borderColor: gray[700],
          "&:hover": {
            backgroundColor: gray[900],
            borderColor: gray[600],
          },
          "&:active": {
            backgroundColor: gray[900],
          },
        }),
      }),
    },
  },

  /** MuiToggleButtonGroup: 選択時の色・シャドウ調整 */
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "10px",
        boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: brand[500],
        },
        ...theme.applyStyles("dark", {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: "#fff",
          },
          boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
        }),
      }),
    },
  },

  /** MuiToggleButton: 選択状態のスタイル調整 */
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "12px 16px",
        textTransform: "none",
        borderRadius: "10px",
        fontWeight: 500,
        ...theme.applyStyles("dark", {
          color: gray[400],
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300],
          },
        }),
      }),
    },
  },

  /** MuiCheckbox: チェックボックスアイコン・色・状態別スタイル調整 */
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: createElement(CheckBoxOutlineBlankRoundedIcon, {
        sx: { color: "hsla(210, 0%, 0%, 0.0)" },
      }),
      checkedIcon: createElement(CheckRoundedIcon, {
        sx: { height: 14, width: 14 },
      }),
      indeterminateIcon: createElement(RemoveRoundedIcon, {
        sx: { height: 14, width: 14 },
      }),
    },
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 5,
        border: "1px solid ",
        borderColor: alpha(gray[300], 0.8),
        boxShadow: "0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset",
        backgroundColor: alpha(gray[100], 0.4),
        transition: "border-color, background-color, 120ms ease-in",
        "&:hover": {
          borderColor: brand[300],
        },
        "&.Mui-focusVisible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
          borderColor: brand[400],
        },
        "&.Mui-checked": {
          color: "white",
          backgroundColor: brand[500],
          borderColor: brand[500],
          boxShadow: `none`,
          "&:hover": {
            backgroundColor: brand[600],
          },
        },
        ...theme.applyStyles("dark", {
          borderColor: alpha(gray[700], 0.8),
          boxShadow: "0 0 0 1.5px hsl(210, 0%, 0%) inset",
          backgroundColor: alpha(gray[900], 0.8),
          "&:hover": {
            borderColor: brand[300],
          },
          "&.Mui-focusVisible": {
            borderColor: brand[400],
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: "2px",
          },
        }),
      }),
    },
  },

  /** MuiInputBase: プレースホルダーの色を調整 */
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: "none",
      },
      input: {
        "&::placeholder": {
          opacity: 0.7,
          color: gray[500],
        },
      },
    },
  },

  /** MuiFormLabel: ラベルにキャプションスタイルを適用 */
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8,
      }),
    },
  },

  /** MuiInputAdornment: 入力装飾アイコンの色調整 */
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[500],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[400],
        }),
      }),
    },
  },

  /** MuiOutlinedInput: 背景色・枠線・フォーカス時のアウトラインなどを調整 */
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 0,
      },
      root: ({ theme }) => ({
        padding: "8px 12px",
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        transition: "border 120ms ease-in",
        "&:hover": {
          borderColor: gray[400],
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          borderColor: brand[400],
        },
        ...theme.applyStyles("dark", {
          "&:hover": {
            borderColor: gray[500],
          },
        }),
        variants: [
          {
            props: { size: "small" },
            style: { height: "2.25rem" },
          },
          {
            props: { size: "medium" },
            style: { height: "2.5rem" },
          },
        ],
      }),
      notchedOutline: {
        border: "none",
      },
    },
  },
};
