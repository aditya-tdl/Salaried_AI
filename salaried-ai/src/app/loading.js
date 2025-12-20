"use client";

import { Box } from "@mui/material";
import { ThreeCircles } from "react-loader-spinner";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <ThreeCircles
        height="80"
        width="80"
        color="#7c3aed"
        visible={true}
        ariaLabel="three-circles-loading"
      />
    </Box>
  );
}
