import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./userSlice/slice";
import authReducer from "./authSlice/slice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
  },
});

export default store;
