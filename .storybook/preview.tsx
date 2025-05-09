import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from "../src/styles";
import { MemoryRouter } from "react-router-dom";

const withProviders = (Story, context) => {
  const isDark = context.globals.theme === "dark";
  document.documentElement.setAttribute(
    "data-mui-color-scheme",
    isDark ? "dark" : "light"
  );

  return (
    <MemoryRouter>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </MemoryRouter>
  );
};

const preview: Preview = {
  decorators: [withProviders],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
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
