import React from "react";
import type { Preview } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const withBrowserRouter = (Story: React.ComponentType) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

const preview: Preview = {
  decorators: [withBrowserRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
