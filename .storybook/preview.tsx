import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import {
  colorSchemes,
  shadows,
  shape,
  typography,
} from "../src/styles/theme-base.constant";

const withMuiTheme = (Story, context) => {
  const colorScheme = context.globals.colorScheme || "light";

  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: "data-mui-color-scheme",
      cssVarPrefix: "template",
    },
    colorSchemes,
    typography,
    shadows,
    shape,
    palette: {
      mode: colorScheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
  globals: {
    colorScheme: "light",
  },
  globalTypes: {
    colorScheme: {
      name: "Color Scheme",
      description: "Global color scheme for components",
      defaultValue: "light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
};

export default preview;
