import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Trending, InitialTMovies } from "../../common/types/typesTS";

const initialState: InitialTMovies = {
  isLoading: true,
  trendingMovies: [],
  time: "day",
};

export const getTrending = createAsyncThunk(
  "trendingMovies/getTrending",
  async (time: string, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return resp.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
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
