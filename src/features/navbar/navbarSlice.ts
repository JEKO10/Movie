import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialNavbar } from "../../common/types/typesTS";

const initialState: InitialNavbar = {
  isLoading: true,
  query: "",
  searchData: [],
};

export const searchMovies = createAsyncThunk(
  "navbar/searchMovies",
  async (inputValue: string, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${inputValue}`
      );
      console.log(resp.data);

      return resp.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setQuery: (state, { payload }: { payload: string }) => {
      state.query = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.searchData = action.payload;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setQuery } = navbarSlice.actions;
export const { reducer } = navbarSlice;
