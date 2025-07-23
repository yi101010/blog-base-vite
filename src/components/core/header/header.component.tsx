import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  MenuItem,
  styled,
  Toolbar,
} from "@mui/material";
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { HEADER_LINKS, MENU_LINKS } from "@/constants";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: 10,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  boxShadow: theme.shadows[1],
  padding: "0px 12px",
}));

export const Header = memo(() => {
  const [open, setOpen] = useState(false);

  const handleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 1,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                px: 2,
                color: "text.primary",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              My Site
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {HEADER_LINKS.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  variant="text"
                  color="info"
                  size="small"
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton sx={{ p: 0.5 }} onClick={handleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={handleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    sx={{ p: 0.5, mb: 1 }}
                    onClick={handleDrawer(false)}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {MENU_LINKS.map((link) => (
                  <MenuItem
                    key={link.path}
                    component={Link}
                    to={link.path}
                    onClick={handleDrawer(false)}
                  >
                    {link.label}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
});
