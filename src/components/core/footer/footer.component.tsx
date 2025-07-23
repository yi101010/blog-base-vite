import { memo } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "@/constants";

export const Footer = memo(() => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        my: 5,
      }}
    >
      <Box textAlign="center">
        {FOOTER_LINKS.map((link) => (
          <Button
            key={link.path}
            component={Link}
            to={link.path}
            variant="text"
            color="info"
            size="small"
          >
            {link.label}
          </Button>
        ))}
      </Box>
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
