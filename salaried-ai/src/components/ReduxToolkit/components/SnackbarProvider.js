"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, Alert, Slide } from "@mui/material";
import { closeSnackbar } from "../Slices/snackbarSlice";

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

export const SnackbarProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeSnackbar());
  };

  return (
    <>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        sx={{ mt: 8 }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: "12px",
            fontWeight: "600",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarProvider;
