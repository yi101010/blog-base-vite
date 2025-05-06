import { memo } from "react";
import { Box, Typography } from "@mui/material";

export const Footer = memo(() => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        my: 5,
      }}
    >
      <Typography
        align="center"
        sx={{
          fontSize: "0.7rem",
          pt: 1,
        }}
      >
        {"© "}
        {new Date().getFullYear()} My Site
        {". All rights reserved."}
      </Typography>
    </Box>
  );
});
