import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLightTheme: () => {},
    setDarkTheme: () => {},
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
