import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import {
  DiscoverPayload,
  InitialDiscoverMovies,
} from "../../common/types/typesTS";

const initialState: InitialDiscoverMovies = {
  isLoading: true,
  discoverMovies: [],
  totalPages: 0,
  totalItems: 0,
  page: 1,
  sortBy: "popularity.desc",
  sortName: "Popularity",
  discover: "genres",
};

export const getDiscoverMovies = createAsyncThunk(
  "discoverMovies/getDiscoverMovies",
  async (id: string | undefined, { getState, rejectWithValue }) => {
    const { discoverMovies } = getState() as {
      discoverMovies: InitialDiscoverMovies;
    };

    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&sort_by=${discoverMovies.sortBy}&vote_count.gte=50&with_${
          discoverMovies.discover
        }=${id}&page=${discoverMovies.page}&with_original_language=en`
      );
      return resp.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

const DiscoverMoviesSlice = createSlice({
  name: "discoverMovies",
  initialState,
  reducers: {
    toggleSort: (state, { payload }: { payload: string }) => {
      state.sortBy = payload;
    },
    toggleSortName: (state, { payload }: { payload: string }) => {
      state.sortName = payload;
    },
    toggleDiscover: (state, { payload }: { payload: string }) => {
      state.discover = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDiscoverMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getDiscoverMovies.fulfilled,
        (state, action: PayloadAction<DiscoverPayload>) => {
          state.isLoading = false;
          state.discoverMovies = action.payload.results;
          state.totalPages = action.payload.total_pages;
          state.totalItems = action.payload.total_results;
        }
      )
      .addCase(getDiscoverMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleSort, toggleSortName, toggleDiscover } =
  DiscoverMoviesSlice.actions;

export const { reducer } = DiscoverMoviesSlice;
