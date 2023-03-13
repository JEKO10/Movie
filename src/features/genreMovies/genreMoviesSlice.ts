import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type GenreMovies = {
  id: number;
  poster_path: string;
};

type InitialStateType = {
  isLoading: boolean;
  genreMovies: GenreMovies[];
  totalPages: number;
  totalItems: number;
  page: number;
};

const initialState: InitialStateType = {
  isLoading: true,
  genreMovies: [],
  totalPages: 0,
  totalItems: 0,
  page: 1,
};

export const getGenreMovies = createAsyncThunk(
  "genreMovies/getGenreMovies",
  async (id: string | undefined, { getState }) => {
    const state: any = getState();

    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}&page=${state.page}`
      );
      return resp.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const genreMoviesSlice = createSlice({
  name: "genreMovies",
  initialState: initialState,
  reducers: {},
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

export const { reducer } = genreMoviesSlice;
