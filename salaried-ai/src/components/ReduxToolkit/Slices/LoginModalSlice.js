import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openLoginModal(state, action) {
      state.open = true;
    },
    closeLoginModal(state, action) {
      state.open = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;
