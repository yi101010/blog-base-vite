import { Box, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilterChipsProps } from "@/components";

/**
 * フィルタチップ群を表示し、選択時にルーティングする UI コンポーネント
 *
 * @example
 * <FilterChips
 *   options={[{ label: "All", value: "all" }, { label: "Tech", value: "tech" }]}
 *   selected={"all"}
 *   onChange={(val) => console.log(val)}
 *   basePath="category"
 * />
 */
export const FilterChips = <T extends string | number>({
  options,
  selected,
  onChange,
  basePath,
}: FilterChipsProps<T>) => {
  const navigate = useNavigate();

  const handleClick = (value: T) => {
    onChange?.(value);
    navigate(`/${basePath}/${value}`);
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
        {options.map((option) => {
          const isSelected = option.value === selected;

          return (
            <Chip
              key={option.value}
              onClick={() => handleClick(option.value)}
              label={option.label}
              sx={
                isSelected
                  ? {}
                  : {
                      backgroundColor: "transparent",
                      border: "none",
                    }
              }
            />
          );
        })}
      </Box>
    </Box>
  );
};
