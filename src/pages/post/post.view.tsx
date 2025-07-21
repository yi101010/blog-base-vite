import { memo } from "react";
import { Typography } from "@mui/material";
import { PageTitle } from "@/components";


export const Post = memo(() => {
  return (
    <>
      <PageTitle>Post</PageTitle>
      <Typography>post page</Typography>
    </>
  );
});
