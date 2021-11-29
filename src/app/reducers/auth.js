import { createSlice } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";

const initialState = {
  admin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.admin = true;
    },
    logOut: (state) => {
      // localStorage.removeItem("token");
      state.admin = false;
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
