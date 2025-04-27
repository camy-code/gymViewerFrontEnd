import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


// Helper functions
import ColorPick from "../tools/ColorPick";
import HelperPages from "../tools/HelperPages";

// MUI imports
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


import { List, ListItem, ListItemText, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Drawer } from "@mui/material";

// The following is the header for the website

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const closeDrawer = () => {
    setOpen(false);
  }

  // So we need to get the height of the container to make sure that

  // The Box here is so we do not get scammed by position
  return (
    <>
      <Box marginBottom={10}>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "white",
            paddingBottom: 1,
            paddingTop: 1,
          }}
          color="black"
        >
          <Toolbar>
            {/* Left Side: Logo and Name */}
            <Box display="flex" alignItems="center" flexGrow={1}>
              {/* <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
                MyWebsite
              </Typography>
              {/* Add an icon here */}
              
            </Box>

            {/* Right Side: Navigation Buttons */}
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ marginLeft: 10, marginRight: 10 }}>
          <List>
            {HelperPages.getPublicPages().map((g) => (
              <ListItem
                button
                onClick={closeDrawer}
                key={g.name}
                component={Link}
                to={g.path}
                sx={{textTransform:"none", color:"black"}}
              >
                <ListItemText primary={g.name.toUpperCase()}   />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header; // we are just

// TODO: make this a burger
