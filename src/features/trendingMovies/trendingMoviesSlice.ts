import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialTrendMovies, Trending } from "../../common/types/typesTS";

const initialState: InitialTrendMovies = {
  isLoading: true,
  trendingMovies: [],
  time: "day",
};

export const getTrending = createAsyncThunk(
  "trendingMovies/getTrending",
  async (time: string, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );

      return resp.data.results;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {
    changeTime: (state, { payload }) => {
      state.time = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrending.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTrending.fulfilled,
        (state, action: PayloadAction<Trending[]>) => {
          state.isLoading = false;
          state.trendingMovies = action.payload;
        }
      )
      .addCase(getTrending.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeTime } = trendingMoviesSlice.actions;

export const { reducer } = trendingMoviesSlice;
