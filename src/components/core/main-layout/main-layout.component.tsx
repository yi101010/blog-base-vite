import { ReactNode, memo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { Header } from "../header";
import { Footer } from "../footer";
import { Contents } from "../contents";

export const MainLayout = memo(({ children }: { children?: ReactNode }) => {
  // ドロワー開閉ステータス
  const [open, setOpen] = useState(true);
  // ドロワー開閉切り替え
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <CssBaseline />
      <Header open={open} toggleMenu={toggleMenu} />
      <Contents open={open}>{children}</Contents>
      <Footer />
    </>
  );
});
