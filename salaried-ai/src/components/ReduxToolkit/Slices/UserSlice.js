import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateProfile(state, action) {
      state.user = action.payload;
    },
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
