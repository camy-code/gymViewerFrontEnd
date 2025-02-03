import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Some react imports
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

const Layout = () => {
  // TODO: make a header

  return (
    <>
      <Header />

      <Outlet />

    
        <Footer />
      
    </>
  );
};

// TODO: make header/footer components

export default Layout;
