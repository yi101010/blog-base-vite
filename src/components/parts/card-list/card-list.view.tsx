import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material";
import { CardListItem, CardListProps } from "@/components";
import { useBreakpoint } from "@/features";

/**
 * 記事カードを一覧表示するコンポーネント。
 */
export const CardList = (props: CardListProps) => {
  const { items, page, count, onChange } = props;
  const { isSmallDown } = useBreakpoint();

  return (
    <>
      <Grid container spacing={{ xs: 0.5, sm: 1 }}>
        {items.map((item) => (
          <Grid key={item.id} size={{ xs: 12 }}>
            <CardListItem {...item} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        page={page}
        count={count}
        onChange={onChange}
        size={isSmallDown ? "small" : "large"}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </>
  );
};
