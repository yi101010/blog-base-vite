import { createTheme } from "@mui/material/styles";
import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from "./theme-base.constant";

/**
 * アプリ用カスタムテーマ
 */
export const appTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
    cssVarPrefix: "template",
  },
  colorSchemes,
  typography,
  shadows,
  shape,
});
