import { useTheme, useMediaQuery } from "@mui/material";

export const useIsMediumScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between("sm", "md"));
};
