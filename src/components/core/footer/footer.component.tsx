import { memo } from "react";
import { Box } from "@mui/material";
import { Copyright } from "../copyright";

export const Footer = memo(() => {

  return (
    <Box>
      <Copyright />
    </Box>
  );
});
