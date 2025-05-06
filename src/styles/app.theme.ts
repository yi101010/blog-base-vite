import { createTheme } from "@mui/material/styles";
import {
  colorSchemes,
  dataDisplayTheme,
  feedbackTheme,
  inputsTheme,
  navigationTheme,
  shadows,
  shape,
  surfacesTheme,
  typography,
} from "./themes";

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
  components: {
    ...dataDisplayTheme,
    ...feedbackTheme,
    ...inputsTheme,
    ...navigationTheme,
    ...surfacesTheme,
  },
});
