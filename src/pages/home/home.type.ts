import { CardListItemProps } from "@/components";

export type HomeProps = {
  articles: CardListItemProps[];
  isLoading: boolean;
  isError: boolean;
  page: number;
  count: number;
  onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
};
