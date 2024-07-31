import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
