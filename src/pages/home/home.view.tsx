import { memo } from "react";
import { Typography } from "@mui/material";
import { HomeProps } from "./home.type";
import { CardList, FilterChips } from "@/components";
import { CATEGORY_OPTIONS, ROUTES_BASE } from "@/constants";

export const Home = memo((props: HomeProps) => {
  const {
    articles,
    isLoading,
    isError,
    page,
    count,
    onChangePage,
    selected,
    onChangeSelected,
  } = props;

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

      <FilterChips
        options={CATEGORY_OPTIONS}
        selected={selected}
        onChange={onChangeSelected}
        basePath={ROUTES_BASE.CATEGORY}
      />
      <CardList
        items={articles}
        page={page}
        count={count}
        onChange={onChangePage}
      />
    </>
  );
});
