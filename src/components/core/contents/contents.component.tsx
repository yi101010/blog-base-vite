import { memo } from "react";
import { Toolbar, Drawer, Divider, useTheme, Container } from "@mui/material";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";
import { Link } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { SIDE_LINKS_TOP, SIDE_LINKS_BOTTOM } from "../../../constants";
import { ContentsProps } from "./contents.interface";
// import { THEME } from "../../../styles";

export const Contents = memo((props: ContentsProps) => {
  const { open, children } = props;
  const theme = useTheme();

  return (
    <>
      {/* > Side Menu ---------------------------------------------- */}
      <Drawer
        open={open}
        anchor="left"
        variant="persistent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", p: 2 },
        }}
      >
        {/* >> Space ---------------------- */}
        <Toolbar variant="dense" />

        {/* >> Side Links Top ---------------------- */}
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          {SIDE_LINKS_TOP.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItem>
                <ListItemButton>
                  <item.icon />
                  <ListItemContent>
                    <Typography level="title-sm">{item.name}</Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        {/* >> Side Links Bottom ---------------------- */}
        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          {SIDE_LINKS_BOTTOM.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItem>
                <ListItemButton>
                  <item.icon />
                  <ListItemContent>
                    <Typography level="title-sm">{item.name}</Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        {/* >> Space ---------------------- */}
        <Divider />

        {/* >> Login User Info ---------------------- */}
        <Box
          sx={{ display: "flex", gap: 1, alignItems: "center", p: 1, mt: 1 }}
        >
          <Avatar
            variant="outlined"
            size="sm"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">Siriwat K.</Typography>
            <Typography level="body-xs">siriwatk@test.com</Typography>
          </Box>
          <IconButton size="sm" variant="plain" color="neutral">
            <LogoutRoundedIcon />
          </IconButton>
        </Box>
      </Drawer>

      {/* > Main ---------------------------------------------- */}
      <Box
        component="main"
      >
        <Toolbar variant="dense" />
        <Container maxWidth={false}>{children}</Container>
      </Box>
    </>
  );
});
