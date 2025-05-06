import { Box, Typography } from "@mui/material";
import { MainSidebar } from ".";
import { MainSidebarProps } from "./main-sidebar.interface";

export default {
  title: "Core/MainSidebar",
  component: MainSidebar,
};

const mainContent = (
  <Box p={2} bgcolor="primary.main" color="white">
    <Typography variant="h6">Main Content</Typography>
    <Typography>ここがメインの表示エリアです。</Typography>
  </Box>
);

const sidebarContent = (
  <Box p={2} bgcolor="secondary.main" color="white">
    <Typography variant="h6">Sidebar</Typography>
    <Typography>ここがサイドバーです。</Typography>
  </Box>
);

const props: MainSidebarProps = {
  main: mainContent,
  sidebar: sidebarContent,
};

export const Basic = () => {
  return <MainSidebar {...props} />;
};
