import { Typography } from "@mui/material";
import { memo } from "react";

export const Home = memo(() => {
  return (
    <>
      <Typography variant="h1" sx={{ fontSize: 26 }} gutterBottom>
        My Site
      </Typography>
      <Typography>This is Blog Site.</Typography>
    </>
  );
});
