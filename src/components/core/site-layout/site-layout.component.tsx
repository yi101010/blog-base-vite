import { memo } from "react";
import { CssBaseline } from "@mui/material";
import { SiteLayoutProps } from "./site-layout.interface";
import { Footer, Header, MainSidebar } from "@/components";

export const SiteLayout = memo(({ main, sidebar }: SiteLayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <MainSidebar main={main} sidebar={sidebar} />
      <Footer />
    </>
  );
});
