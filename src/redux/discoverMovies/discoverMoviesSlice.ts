import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import {
  DiscoverPayload,
  InitialDiscoverMovies,
  MovieCollection,
} from "../../common/types/typesTS";

const initialState: InitialDiscoverMovies = {
  isLoading: true,
  discoverMovies: [],
  collection: {} as MovieCollection,
  totalPages: 0,
  totalItems: 0,
  sortBy: "popularity.desc",
  sortName: "Popularity",
  discover: "genres",
};

export type DiscoverParams = {
  id: string | undefined;
  page?: number;
};

export const getDiscoverMovies = createAsyncThunk(
  "discoverMovies/getDiscoverMovies",
  async ({ id, page = 1 }: DiscoverParams, { getState, rejectWithValue }) => {
    const { discoverMovies } = getState() as {
      discoverMovies: InitialDiscoverMovies;
    };

    const returnedData: DiscoverPayload = {
      results: [],
      total_pages: 0,
      total_results: 0,
    };

    try {
      for (
        let i = page === 1 ? page : page - 3;
        page === 1 ? i <= page + 5 : i < page + 3;
        i++
      ) {
        // for (let i = page; i <= page; i++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&sort_by=${discoverMovies.sortBy}&vote_count.gte=50&with_${
            discoverMovies.discover
          }=${id}&page=${i}&with_original_language=en`
        );

        returnedData.results.push(...response.data.results);
        returnedData.total_pages = response.data.total_pages;
        returnedData.total_results = response.data.total_results;
      }

      return returnedData;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

export const getCollection = createAsyncThunk(
  "discoverMovies/getCollection",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/collection/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
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
      .addCase(getDiscoverMovies.pending || getCollection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getDiscoverMovies.fulfilled,
        (state, action: PayloadAction<DiscoverPayload | undefined>) => {
          state.discoverMovies = action.payload?.results;
          state.totalPages = action.payload?.total_pages;
          state.totalItems = action.payload?.total_results;
          state.isLoading = false;
        }
      )
      .addCase(
        getCollection.fulfilled,
        (state, action: PayloadAction<MovieCollection>) => {
          state.collection = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        getDiscoverMovies.rejected || getCollection.rejected,
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const {
  toggleSort,
  toggleSortName,
  toggleDiscover,
} = DiscoverMoviesSlice.actions;

export const { reducer } = DiscoverMoviesSlice;
