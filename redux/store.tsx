import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import busketReducer from "./slices/basketSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: {
      busket: busketReducer,
      auth: authReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(store);
