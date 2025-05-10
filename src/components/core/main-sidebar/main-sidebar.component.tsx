import { Box, Container, Toolbar } from "@mui/material";
import { memo } from "react";
import { Outlet } from "react-router-dom";
import { MainSidebarProps } from "./main-sidebar.interface";

export const MainSidebar = memo(({ main, sidebar }: MainSidebarProps) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Toolbar />
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        width="100%"
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
          }}
        >
          {main || <Outlet />}
        </Box>
        <Box
          sx={{
            width: { xs: "0%", md: "30%" },
            display: { xs: "none", md: "block" },
          }}
        >
          {sidebar}
        </Box>
      </Box>
    </Container>
  );
});
