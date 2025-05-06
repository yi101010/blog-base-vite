import { Box, Typography } from "@mui/material";
import { SiteLayout } from ".";
import { SiteLayoutProps } from "./site-layout.interface";

export default {
  title: "Core/SiteLayout",
  component: SiteLayout,
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

const props: SiteLayoutProps = {
  main: mainContent,
  sidebar: sidebarContent,
};

export const Basic = () => {
  return <SiteLayout {...props} />;
};
