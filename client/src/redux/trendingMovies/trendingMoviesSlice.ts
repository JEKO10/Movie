import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import {
  InitialTrendMovies,
  MovieCreditsType,
  Trending
} from "../../common/types/typesTS";

const initialState: InitialTrendMovies = {
  isLoading: true,
  trendingMovies: [],
  movieCredits: [],
  time: "week"
};

export const getCredits = createAsyncThunk(
  "trendingMovies/getCredits",
  async (_, { getState, rejectWithValue }) => {
    const movieCreditsArray: MovieCreditsType[] = [];
    const state = getState() as { trendingMovies: InitialTrendMovies };

    try {
      for (let i = 0; i < 4; i++) {
        const movieId = state.trendingMovies.trendingMovies[i]?.id;

        if (movieId) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${import.meta.env.VITE_API_KEY}`
          );
          movieCreditsArray.push(response.data);
        }
      }

      return movieCreditsArray;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue([]);
    }
  }
);

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
      if (isAxiosError(error)) return rejectWithValue(error.response);
    }
  }
);

const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {
    changeTime: (state, { payload }) => {
      state.time = payload;
    }
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
    builder
      .addCase(getCredits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCredits.fulfilled,
        (state, action: PayloadAction<MovieCreditsType[]>) => {
          state.isLoading = false;
          state.movieCredits = action.payload;
        }
      )
      .addCase(getCredits.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const { changeTime } = trendingMoviesSlice.actions;

export const { reducer } = trendingMoviesSlice;
