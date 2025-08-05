import { CardList } from "@/components";
import { Typography } from "@mui/material";
import { memo } from "react";
import { HomeProps } from "./home.type";

export const Home = memo((props: HomeProps) => {
  const { articles, isLoading, isError, page, count, onChangePage } = props;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography color="error">データの取得に失敗しました。</Typography>;
  }

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: 26 }} gutterBottom>
        My Site
      </Typography>
      <CardList
        items={articles}
        page={page}
        count={count}
        onChange={onChangePage}
      />
    </>
  );
});
