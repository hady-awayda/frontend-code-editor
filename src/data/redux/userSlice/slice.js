import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    user: null,
    conversations: [],
    sourceCodes: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setSourceCodes: (state, action) => {
      state.sourceCodes = action.payload;
    },
  },
});

export const { setUser, setConversations, setSourceCodes } = dataSlice.actions;

export default dataSlice.reducer;
