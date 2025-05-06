import { memo } from "react";
import { CssBaseline } from "@mui/material";
import { SiteLayoutProps } from "./site-layout.interface";
import { Header } from "../header";
import { Footer } from "../footer";
import { MainSidebar } from "../main-sidebar";

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
