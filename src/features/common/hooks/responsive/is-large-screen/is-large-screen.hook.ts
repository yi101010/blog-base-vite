import { useTheme, useMediaQuery } from "@mui/material";

export const useIsLargeScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("md"));
};
