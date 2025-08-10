import { Box, Chip } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { FilterChipsProps } from "@/components";

/**
 * カテゴリやタブの切り替えに使用するフィルタチップ群コンポーネント。
 * 現在のURLパスに応じてアクティブ状態を自動判定し、チップの見た目を切り替える。
 *
 * @example
 * ```tsx
 * <FilterChips
 *   items={[
 *     { label: "All",    path: "/" },
 *     { label: "Tech",   path: "/category/tech" },
 *     { label: "Design", path: "/category/design" },
 *   ]}
 * />
 * ```
 * - 現在のパスが各 `path` と前方一致した場合、そのチップがアクティブ表示される。
 * - ページングURL（例: `/category/tech/page/2` や `/page/1`）にも対応。
 */
export const FilterChips = ({ items }: FilterChipsProps) => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    // ルート("/")だけは "/" または "/page/..." でアクティブ扱い
    if (path === "/") {
      return pathname === "/" || pathname.startsWith("/page/");
    }
    // その他は前方一致で判定（ページング含む）
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: "100%",
        justifyContent: "space-between",
        alignItems: { xs: "start", md: "center" },
        gap: 4,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          gap: 3,
          overflow: "auto",
        }}
      >
        {items.map(({ label, path }) => {
          const active = isActive(path);
          return (
            <Chip
              key={path}
              component={RouterLink}
              to={path}
              clickable
              label={label}
              color={active ? "primary" : "default"}
              variant={active ? "filled" : "outlined"}
              sx={
                !active
                  ? { backgroundColor: "transparent", border: "none" }
                  : {}
              }
            />
          );
        })}
      </Box>
    </Box>
  );
};
