import { NavLink } from "@/types";
import { FilterChips } from "@/components";

export default {
  title: "Components/FilterChips",
  component: FilterChips,
};

/**
 * 基本（ルート = All がアクティブ）
 */
export const Basic = () => {
  const items: NavLink[] = [
    { label: "All", path: "/" },
    { label: "Company", path: "/category/company" },
    { label: "Product", path: "/category/product" },
    { label: "Design", path: "/category/design" },
    { label: "Engineering", path: "/category/engineering" },
  ];
  return <FilterChips items={items} />;
};
