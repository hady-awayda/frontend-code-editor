import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./userSlice/slice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
