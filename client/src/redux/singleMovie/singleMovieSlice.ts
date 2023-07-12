import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialSingleMovie, MovieInfoType } from "../../common/types/typesTS";

const initialState: InitialSingleMovie = {
  isLoading: true,
  movieInfo: <MovieInfoType>{},
  isPosterOpen: false,
  category: "cast",
  isCastOpen: false,
  isReview: false,
  isLists: false,
  isShare: false,
};

export const getMovie = createAsyncThunk(
  "singleMovie/getMovie",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&append_to_response=credits,keywords&adult=false`
      );
      return resp.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {
    togglePoster: (state, action: PayloadAction<boolean>) => {
      state.isPosterOpen = action.payload;
    },
    toggleCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    toggleCast: (state, action: PayloadAction<boolean>) => {
      state.isCastOpen = action.payload;
    },
    toggleReview: (state, action: PayloadAction<boolean>) => {
      state.isReview = action.payload;
    },
    toggleList: (state, action: PayloadAction<boolean>) => {
      state.isLists = action.payload;
    },
    toggleShare: (state, action: PayloadAction<boolean>) => {
      state.isShare = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getMovie.fulfilled,
        (state, action: PayloadAction<MovieInfoType>) => {
          state.isLoading = false;
          state.movieInfo = action.payload;
        }
      )
      .addCase(getMovie.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  togglePoster,
  toggleCategory,
  toggleCast,
  toggleReview,
  toggleList,
  toggleShare,
} = singleMovieSlice.actions;

export const { reducer } = singleMovieSlice;
