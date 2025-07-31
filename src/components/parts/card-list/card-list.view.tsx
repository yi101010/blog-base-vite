import Grid from "@mui/material/Grid2";
import { CardListItem, CardListProps } from "@/components";

/**
 * 記事カードを一覧表示するコンポーネント。
 * PCは2列、スマホは1列で表示される。
 */
export const CardList = ({ items }: CardListProps) => {
  return (
    <Grid container spacing={{ xs: 0.5, sm: 1 }}>
      {items.map((item) => (
        <Grid key={item.id} size={{ xs: 12 }}>
          <CardListItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
