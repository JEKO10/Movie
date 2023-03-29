import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { InitialGenreMovies } from "../../common/types/typesTS";

const initialState: InitialGenreMovies = {
  isLoading: true,
  genreMovies: [],
  totalPages: 0,
  totalItems: 0,
  page: 1,
  sortBy: "popularity.desc",
  sortName: "Popularity",
};

export const getGenreMovies = createAsyncThunk(
  "genreMovies/getGenreMovies",
  async (id: string | undefined, { getState, rejectWithValue }) => {
    const { genreMovies } = getState() as { genreMovies: InitialGenreMovies };
    console.log(genreMovies.sortBy);

    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${genreMovies.sortBy}&vote_count.gte=50&with_genres=${id}&page=${genreMovies.page}&with_original_language=en`
      );
      return resp.data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

const genreMoviesSlice = createSlice({
  name: "genreMovies",
  initialState: initialState,
  reducers: {
    toggleSort: (state, { payload }: { payload: string }) => {
      state.sortBy = payload;
    },
    toggleSortName: (state, { payload }: { payload: string }) => {
      state.sortName = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenreMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenreMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.genreMovies = payload.results;
        state.totalPages = payload.total_pages;
        state.totalItems = payload.total_results;
      })
      .addCase(getGenreMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleSort, toggleSortName } = genreMoviesSlice.actions;
export const { reducer } = genreMoviesSlice;
