"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";


const GlobalWrapper = ({ children }) => {

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff"
      }}
    >
      {/* Conditional Navbar */}
      <Navbar />

      {/* Page Content */}
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default GlobalWrapper;
