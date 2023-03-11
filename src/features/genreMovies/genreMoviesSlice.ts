import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type GenreMovies = {
  id: number;
};

type InitialStateType = {
  isLoading: boolean;
  genreMovies: GenreMovies[];
};

const initialState: InitialStateType = {
  isLoading: true,
  genreMovies: [],
};

export const getGenreMovies = createAsyncThunk(
  "genreMovies/getGenreMovies",
  async (id: number, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`
      );
      return resp.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
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
      .addCase(getGenreMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genreMovies = action.payload;
      })
      .addCase(getGenreMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer } = genreMoviesSlice;
