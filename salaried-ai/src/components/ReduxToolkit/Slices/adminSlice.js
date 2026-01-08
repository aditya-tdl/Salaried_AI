import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../baseUrl/BaseUrl";

/* ===========================
   Async Thunk
=========================== */

export const fetchAllUsers = createAsyncThunk(
  "admin/fetchAllUsers",
  async ({ page = 1, limit = 10, search = "" }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      const response = await axios.get(`${baseUrl}/users`, {
        params: {
          page,
          limit,
          search: search || undefined, // IMPORTANT
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);

/* ===========================
   Slice
=========================== */

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
    },
    loading: false,
    error: null,
  },
  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    },
    resetUsers: (state) => {
      state.users = [];
      state.pagination = {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        // ❌ DO NOT clear users here
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearAdminError, resetUsers } = adminSlice.actions;
export default adminSlice.reducer;
