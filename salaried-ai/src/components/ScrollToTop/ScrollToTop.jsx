"use client";
import { Icon } from "@iconify/react";
import { Box, Fab, IconButton } from "@mui/material";
import React from "react";

const ScrollToTop = () => {
  const scrollUpward = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Fab
        variant="circular"
        color="success"
        size="large"
        sx={{
          position: "fixed",
          bottom: { md: 45, xs: 55 },
          right: { md: 120, xs: 75 },
          zIndex: 1000,
          backgroundColor: "rgba(105, 104, 104, 0.5)",
          width: "45px",
          transition:"all ease-in-out 0.3s",
          height: "45px",
          color: "#000",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "#000 !important",
            "& svg":{
                color:"#000 !important"
            }
          },
        }}
        onClick={scrollUpward}
      >
        <Icon
          icon="material-symbols:arrow-upward-alt-rounded"
          color="white"
          height={"45px"}
          width={"100%"}
        />
      </Fab>
    </Box>
  );
};

export default ScrollToTop;
