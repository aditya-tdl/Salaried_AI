"use client";
import { Backdrop, Box, Typography } from "@mui/material";
import { ThreeCircles } from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function Loader() {
  const { open } = useSelector((state) => state.loader);
  return (
    <>
      <Backdrop
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
          zIndex: 1000,
        }}
      >
        <ThreeCircles
          visible={open}
          height="80"
          width="80"
          color="#ACAEC6"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Backdrop>
    </>
  );
}
