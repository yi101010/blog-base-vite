import { memo } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SITE_INFO } from "../../../constants";

export const Copyright = memo(() => {
  return (
    <Typography
      align="center"
      sx={{
        fontSize: "0.7rem",
        pt: 1,
      }}
    >
      {"© "}
      {new Date().getFullYear()}{" "}
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        {SITE_INFO.NAME}
      </Link>
      {". All rights reserved."}
    </Typography>
  );
});
