import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type KeywordMovies = {
  id: number;
  poster_path: string;
};

type InitialStateType = {
  isLoading: boolean;
  keywordMovies: KeywordMovies[];
  totalPages: number;
  totalItems: number;
  page: number;
  sortBy: string;
  sortName: string;
};

const initialState: InitialStateType = {
  isLoading: true,
  keywordMovies: [],
  totalPages: 0,
  totalItems: 0,
  page: 1,
  sortBy: "popularity.desc",
  sortName: "Popularity",
};

export const getKeywordMovies = createAsyncThunk(
  "keywordMovies/getKeywordMovies",
  async (id: string | undefined, { getState, rejectWithValue }) => {
    const { keywordMovies } = getState() as { keywordMovies: InitialStateType };

    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${keywordMovies.sortBy}&vote_count.gte=50&with_keywords=${id}&page=${keywordMovies.page}&with_original_language=en`
      );
      return resp.data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

const keywordMoviesSlice = createSlice({
  name: "keywordMovies",
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
      .addCase(getKeywordMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getKeywordMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.keywordMovies = payload.results;
        state.totalPages = payload.total_pages;
        state.totalItems = payload.total_results;
      })
      .addCase(getKeywordMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleSort, toggleSortName } = keywordMoviesSlice.actions;

export const { reducer } = keywordMoviesSlice;
