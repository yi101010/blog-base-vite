import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from "../src/styles";

const withMuiTheme = (Story, context) => {
  // ここで data-mui-color-scheme を即時に切り替える（useEffect 不要）
  const isDark = context.globals.theme === "dark";
  document.documentElement.setAttribute(
    "data-mui-color-scheme",
    isDark ? "dark" : "light"
  );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withMuiTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // グローバルに mode の選択肢を定義
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme mode",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
      },
    },
  },
};

export default preview;
