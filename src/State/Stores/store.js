import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "store",
  initialState: {
    value: "",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export default store;
