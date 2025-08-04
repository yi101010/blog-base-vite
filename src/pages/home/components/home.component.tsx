import { CardList, CardListItemProps } from "@/components";
import { Typography } from "@mui/material";
import { memo } from "react";

export const Home = memo(() => {
  const items: CardListItemProps[] = [
    {
      id: "1",
      imgPath: "https://picsum.photos/400/300?random=1",
      title: "記事タイトル1。ここにタイトルが入ります。",
      category: "カテゴリA",
      publishedAt: "2025/07/26 13:00",
      commentCount: 12,
    },
    {
      id: "2",
      imgPath: "https://picsum.photos/400/300?random=2",
      title: "記事タイトル2。ここにタイトルが入ります。",
      category: "カテゴリB",
      publishedAt: "2025/07/25 09:00",
      commentCount: 8,
    },
    {
      id: "3",
      imgPath: "https://picsum.photos/400/300?random=3",
      title: "記事タイトル3。ここにタイトルが入ります。",
      category: "カテゴリC",
      publishedAt: "2025/07/24 17:30",
      commentCount: 3,
    },
  ];

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: 26 }} gutterBottom>
        My Site
      </Typography>
      <CardList items={items} />
    </>
  );
});
