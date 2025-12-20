import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const cartDrawerSlice = createSlice({
  name: "cartDrawer",
  initialState,
  reducers: {
    openCartDrawer(state, action) {
      state.open = true;
    },
    closeCartDrawer(state, action) {
      state.open = false;
    },
  },
});

export const { openCartDrawer, closeCartDrawer } = cartDrawerSlice.actions;
export default cartDrawerSlice.reducer;
