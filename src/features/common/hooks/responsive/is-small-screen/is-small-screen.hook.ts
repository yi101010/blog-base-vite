import { useTheme, useMediaQuery } from "@mui/material";

export const useIsSmallScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
};
