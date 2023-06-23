import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialSingleMovie, MovieInfoType } from "../../common/types/typesTS";

const initialState: InitialSingleMovie = {
  isLoading: true,
  movieInfo: <MovieInfoType>{},
  isModalOpen: false,
  category: "cast",
  isCastOpen: false,
  review: false,
  list: false,
  share: false,
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
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;

      if (action.payload) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    toggleCast: (state, action: PayloadAction<boolean>) => {
      state.isCastOpen = action.payload;
    },
    toggleReview: (state, action: PayloadAction<boolean>) => {
      state.review = action.payload;

      // if (action.payload) {
      //   document.body.style.overflow = "hidden";
      // } else {
      //   document.body.style.overflow = "auto";
      // }
    },
    toggleList: (state, action: PayloadAction<boolean>) => {
      state.list = action.payload;

      // if (action.payload) {
      //   document.body.style.overflow = "hidden";
      // } else {
      //   document.body.style.overflow = "auto";
      // }
    },
    toggleShare: (state, action: PayloadAction<boolean>) => {
      state.share = action.payload;

      // if (action.payload) {
      //   document.body.style.overflow = "hidden";
      // } else {
      //   document.body.style.overflow = "auto";
      // }
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
  toggleModal,
  toggleCategory,
  toggleCast,
  toggleReview,
  toggleList,
  toggleShare,
} = singleMovieSlice.actions;

export const { reducer } = singleMovieSlice;
