import { memo, ReactNode } from "react";
import { Typography, TypographyProps, styled } from "@mui/material";

type Props = {
  children: ReactNode;
} & Omit<TypographyProps, "component">;

const Root = styled(Typography)({
  position: "relative",
  padding: "15px 0px",
  fontSize: 20,
  letterSpacing: "0.1em",
  fontWeight: 700,
  display: "block",
  boxSizing: "border-box",
  textAlign: "center",
  marginInline: "auto",
  isolation: "isolate",
  "&::before": {
    content: '""',
    position: "absolute",
    top: -5,
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
    width: 50,
    height: 50,
    display: "inline-block",
    clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
    background: "#d4a752",
    zIndex: -1,
  },
  "& > span": {
    position: "relative",
    zIndex: 1,
  },
});

export const SubTitle = memo(({ children, ...typographyProps }: Props) => {
  return (
    <Root variant="h3" {...typographyProps}>
      <span>{children}</span>
    </Root>
  );
});
