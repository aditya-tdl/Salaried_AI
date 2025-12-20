import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import ModalComponent from "../ModalComponent/ModalComponent";
// import deleteIcon from "../../Assets/deleteIcon2.svg";
// import cancelImage from "../../Assets/clarity_remove-line.png";
// import ProtectionImage from "../../Assets/protection.png";
// import ShildImage from "../../Assets/shield2.png";
import { Delete, Remove } from "@mui/icons-material";

const DeleteModal = ({ open, handleClose, dialog, deleteFunc }) => {
  return (
    <>
      <ModalComponent open={open} handleClose={handleClose}>
        <Stack
          spacing={2}
          sx={{
            // bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {dialog.buttonText === "Activate" ||
              dialog.buttonText === "Ignore" ? (
                // <img src={ProtectionImage} alt="del" width={50} />
                <></>
              ) : dialog.buttonText === "Deactivate" ? (
                // <img src={ShildImage} alt="del" width={50} />
                <></>
              ) : dialog.buttonText === "Remove" ? (
                <Remove alt="del" width={50} />
              ) : (
                <Delete height={50} width={50} alt="del" />
              )}
            </Stack>
          </Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "17px",
              // textAlign: "center"
            }}
          >
            {dialog.buttonText === ""
              ? `Are you sure you want to delete this ${dialog?.title} ?`
              : `${dialog?.title}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              bgcolor: "background.paper",
              my: 2,
            }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{
                "&:hover": {
                  backgroundColor: "black",
                  boxShadow: "none",
                  color: "white",
                },
              }}
              onClick={() => {
                deleteFunc();
                handleClose();
              }}
            >
              {dialog.buttonText ? dialog.buttonText : "Delete"}
              {/* delete */}
            </Button>
            <Button
              variant="outlined"
              size="medium"
              onClick={handleClose}
              sx={{
                backgroundColor: "black",
                  boxShadow: "none",
                  color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  boxShadow: "none",
                  color: "black",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Stack>
      </ModalComponent>
    </>
  );
};

export default DeleteModal;
