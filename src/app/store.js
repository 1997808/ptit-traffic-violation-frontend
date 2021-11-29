import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/demo/counterSlice";
import authReducer from "./reducers/auth";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
