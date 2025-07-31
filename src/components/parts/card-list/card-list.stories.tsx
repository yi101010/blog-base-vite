import { useState } from "react";
import { CardList, CardListItemProps } from "@/components";

export default {
  title: "Components/CardList",
  component: CardList,
};

export const Basic = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const items: CardListItemProps[] = [
    {
      id: "1",
      imgPath: "https://picsum.photos/400/300?random=1",
      title: "記事タイトル1。ここにタイトルが入ります。",
      category: "カテゴリA",
      publishedAt: "2025/07/26 13:00",
      commentCount: 12,
      isFavorite: !!favorites["1"],
      onClickFavorite: () => toggleFavorite("1"),
    },
    {
      id: "2",
      imgPath: "https://picsum.photos/400/300?random=2",
      title: "記事タイトル2。ここにタイトルが入ります。",
      category: "カテゴリB",
      publishedAt: "2025/07/25 09:00",
      commentCount: 8,
      isFavorite: !!favorites["2"],
      onClickFavorite: () => toggleFavorite("2"),
    },
    {
      id: "3",
      imgPath: "https://picsum.photos/400/300?random=3",
      title: "記事タイトル3。ここにタイトルが入ります。",
      category: "カテゴリC",
      publishedAt: "2025/07/24 17:30",
      commentCount: 3,
      isFavorite: !!favorites["3"],
      onClickFavorite: () => toggleFavorite("3"),
    },
  ];

  return <CardList items={items} />;
};
