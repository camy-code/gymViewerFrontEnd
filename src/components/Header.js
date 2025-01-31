import { useState } from 'react';


// Helper functions 
import ColorPick from "../tools/ColorPick"
import HelperPages from "../tools/HelperPages";

// MUI imports 
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

// The following is the header for the website

const Header = ({mainColor, textColor}) => {
  const [open, setOpen] = useState(false);

return <>
    <AppBar position="fixed" sx={{bgcolor: ColorPick.getColor()[0], marginBottom:-3, paddingBottom:1, paddingTop:1}} color="black">
      <Toolbar>
        {/* Left Side: Logo and Name */}
        <Box display="flex" alignItems="center" flexGrow={1}>
         
          <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
            MyWebsite
          </Typography>
          {/* Add an icon here */}
          <DeleteOutlinedIcon sx={{marginLeft:1}}/>
        </Box>

        {/* Right Side: Navigation Buttons */}
        <Box>
          {HelperPages.getPublicPages().map( (g) => (
            <Button color="inherit">{g.name}</Button>
          ))}
         
        </Box>
      </Toolbar>
    </AppBar>

</>
}

export default Header; // we are just 