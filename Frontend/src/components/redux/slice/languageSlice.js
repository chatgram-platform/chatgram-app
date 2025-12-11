// src/redux/slices/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en", // default language
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === "en" ? "am" : "en";
    },
    setLanguage: (state, action) => {
      state.lang = action.payload; // expects 'en' or 'am'
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
