// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slice/languageSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    // add other slices like themeReducer if needed
  },
});

export default store;
