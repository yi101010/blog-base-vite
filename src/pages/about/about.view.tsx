import { memo } from "react";
import { Typography } from "@mui/material";
import { PageTitle } from "@/components";


export const About = memo(() => {
  return (
    <>
      <PageTitle>About</PageTitle>
      <Typography>This is Blog Site.</Typography>
    </>
  );
});
