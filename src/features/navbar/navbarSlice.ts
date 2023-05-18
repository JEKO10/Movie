import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialNavbar } from "../../common/types/typesTS";

const initialState: InitialNavbar = {
  isLoading: true,
  isSearchOpen: false,
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

      return resp.data.results;
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
    setIsSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.searchData = action.payload;
        state.isLoading = false;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setQuery, setIsSearchOpen } = navbarSlice.actions;
export const { reducer } = navbarSlice;
