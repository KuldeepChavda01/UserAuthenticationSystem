import { createSlice } from "@reduxjs/toolkit";

// Initial state of the auth slice
const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
};

// Create the slice
const authSlice = createSlice({
  name: "auth", // name of the slice, used for action type prefixes
  initialState, // starting state of this slice
  reducers: {
    registerUser: () => {},
    loginUser: () => {},
    logoutUser: () => {},
  },
});

// First export
export const { registerUser, loginUser, logoutUser } = authSlice.actions;

// Final export
export default authSlice.reducer;
