import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      console.log(payload);
      state.query = payload;
    },
  },
});

export const { setQuery } = navbarSlice.actions;
export const { reducer } = navbarSlice;
