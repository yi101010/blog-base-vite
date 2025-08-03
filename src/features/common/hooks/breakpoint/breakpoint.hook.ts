import { useTheme, useMediaQuery } from "@mui/material";
import { BreakpointFlags } from "@/features";

/**
 * 画面幅のブレークポイントを判定するカスタムフック
 *
 * @example
 * ```tsx
 * const { isSmallDown, isLg } = useBreakpoint();
 * if (isSmallDown) {
 *   console.log("スマホまたは小型タブレットの幅です");
 * }
 * ```
 *
 * @returns {BreakpointFlags} ブレークポイント判定結果
 */
export const useBreakpoint = (): BreakpointFlags => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const isSmallDown = useMediaQuery(theme.breakpoints.down("sm")); // ~899px
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")); // 900px〜
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg")); // 1200px〜

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isSmallDown,
    isMediumUp,
    isLargeUp,
  };
};
