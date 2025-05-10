import { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SiteLayoutProps } from "./site-layout.interface";
import { Footer, Header, MainSidebar } from "@/components";
import { appTheme } from "@/styles";

export const SiteLayout = memo(({ main, sidebar }: SiteLayoutProps) => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Header />
      <MainSidebar main={main} sidebar={sidebar} />
      <Footer />
    </ThemeProvider>
  );
});
