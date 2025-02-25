import { memo } from "react";
import { AppBar, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { HeaderProps } from "./header.interface";

export const Header = memo((props: HeaderProps) => {


  return (
    <AppBar
      position="static"
      // enableColorOnDark
      sx={{
        boxShadow: 0,
        // bgcolor: 'transparent',
        backgroundImage: 'none',
        // mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        bar
      </Container>
    </AppBar>
  );
});
