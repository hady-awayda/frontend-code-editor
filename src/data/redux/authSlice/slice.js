import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userData: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearAuth: (state) => {
      state.token = null;
      state.userData = null;
    },
  },
});

export const { setToken, setUserData, clearAuth } = authSlice.actions;
export default authSlice.reducer;
