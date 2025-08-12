import { memo } from "react";
import { Typography } from "@mui/material";
import { HomeProps } from "./home.type";
import { CardList, FilterChips, SubTitle } from "@/components";
import { CATEGORY_LINKS } from "@/constants";

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

      <SubTitle>おすすめ記事</SubTitle>
      <SubTitle>人気記事ランキング</SubTitle>

      <FilterChips items={CATEGORY_LINKS} />
      <CardList
        items={articles}
        page={page}
        count={count}
        onChange={onChangePage}
      />
    </>
  );
});
