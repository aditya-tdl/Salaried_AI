import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

const offerDrawerSlice = createSlice({
  name: "offerDrawer",
  initialState,
  reducers: {
    openOfferDrawer(state, action) {
      state.open = true;
    },
    closeOfferDrawer(state, action) {
      state.open = false;
    },
  },
});

export const { openOfferDrawer, closeOfferDrawer } = offerDrawerSlice.actions;
export default offerDrawerSlice.reducer;
