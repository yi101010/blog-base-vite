import { useState } from "react";
import { CardListItem } from "./card-list-item.view";
import { CardListItemProps } from ".";

export default {
  title: "Components/CardListItem",
  component: CardListItem,
};

export const Basic = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const props: CardListItemProps = {
    id: "123",
    imgPath: "https://picsum.photos/400/300?random=1",
    title:
      "記事のタイトルになります。ここにタイトルが表示されます。記事のタイトルになります。ここにタイトルが表示されます。",
    category: "カテゴリ",
    publishedAt: "2025/07/26 13:00",
    commentCount: 123,
    isFavorite,
    onClickFavorite: () => setIsFavorite((prev) => !prev),
  };

  return <CardListItem {...props} />;
};
