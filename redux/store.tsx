import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import busketReducer from "./slice/basketSlice";

export const store = configureStore({
  reducer: {
    busket: busketReducer,
    auth: authReducer,
  },
});