import { useState } from "react";
import { FilterChips } from "./filter-chips.view";
import type { FilterOption } from "./filter-chips.type";

export default {
  title: "Components/FilterChips",
  component: FilterChips,
};

/**
 * カテゴリ選択の基本的な使用例
 */
export const Basic = () => {
  const options: FilterOption[] = [
    { label: "All", value: "all" },
    { label: "Company", value: "company" },
    { label: "Product", value: "product" },
    { label: "Design", value: "design" },
    { label: "Engineering", value: "engineering" },
  ];

  const [selected, setSelected] = useState("all");

  return (
    <FilterChips
      options={options}
      selected={selected}
      onChange={setSelected}
      basePath="category"
    />
  );
};
