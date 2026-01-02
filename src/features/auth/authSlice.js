import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
};

const handleRegister = (state, action) => {
  state.users.push(action.payload);
};

const handleLogin = (state, action) => {
  const credentials = action.payload;
  const user = state.users.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );
  if (user) {
    state.currentUser = user;
    state.isAuthenticated = true;
  }
};

const handleLogout = (state) => {
  state.currentUser = null;
  state.isAuthenticated = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: handleRegister,
    loginUser: handleLogin,
    logoutUser: handleLogout,
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
