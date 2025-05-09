import { Typography } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";

export const NotFound = memo(() => {
  return (
    <>
      <Typography variant="h1" sx={{ fontSize: 26 }} gutterBottom>
        404 NOT FOUND
      </Typography>
      <Typography>お探しのページは見つかりませんでした</Typography>
      <Link to="/">ホームに戻る</Link>
    </>
  );
});
