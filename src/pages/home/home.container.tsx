import { memo } from "react";
import { Home } from "./home.view";
import { useArticlesLatest, useFavorites, usePagination } from "@/features";
import { PAGINATION, ROUTES, ROUTES_BASE } from "@/constants";
import { useFilterChips } from "@/components";

export const HomeContainer = memo(() => {
  const { page, onChange } = usePagination(ROUTES.HOME);
  const limit = PAGINATION.LIMIT;

  const { data, isLoading, isError } = useArticlesLatest();

  const totalCount = data?.length ?? 0;
  const pageCount = Math.ceil(totalCount / limit);

  // ページ分だけデータを切り出す
  const pagedArticles = data
    ? data.slice((page - 1) * limit, page * limit)
    : [];

  const { toggleFavorite, isFavorite } = useFavorites();

  const mappedArticles = pagedArticles.map((a) => ({
    ...a,
    isFavorite: isFavorite(a.id),
    onClickFavorite: () => toggleFavorite(a.id),
  }));

  const { selected, onChange: onChangeSelected } = useFilterChips(
    ROUTES_BASE.CATEGORY
  );

  return (
    <Home
      articles={mappedArticles}
      isLoading={isLoading}
      isError={isError}
      page={page}
      count={pageCount}
      onChangePage={onChange}
      selected={selected}
      onChangeSelected={onChangeSelected}
    />
  );
});
