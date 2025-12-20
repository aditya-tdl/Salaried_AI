import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  role: null, // Added role to track user role
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    updateProfile(state, action) {
      state.user = action.payload;
    },
    logout(state, action) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
    SetRole(state, action) {
      console.log("Setting role:", action.payload);
      state.role = action.payload;
    }
  },
});

export const { login, logout, updateProfile, SetRole } = authSlice.actions;
export default authSlice.reducer;
