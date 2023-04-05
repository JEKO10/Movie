import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { MovieInfoType } from "../../common/types/typesTS";

type InitialStateType = {
  isLoading: boolean;
  movieInfo: MovieInfoType;
  isModalOpen: boolean;
  category: string;
  isCastOpen: boolean;
};

const initialState: InitialStateType = {
  isLoading: true,
  movieInfo: <MovieInfoType>{},
  isModalOpen: false,
  category: "cast",
  isCastOpen: false,
};

export const getMovie = createAsyncThunk(
  "singleMovie/getMovie",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits,keywords&adult=false`
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
    toggleModal: (state, { payload }) => {
      state.isModalOpen = payload;
      if (payload) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    toggleCategory: (state, { payload }) => {
      state.category = payload;
    },
    toggleCast: (state, { payload }) => {
      state.isCastOpen = payload;
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

export const { toggleModal, toggleCategory, toggleCast } =
  singleMovieSlice.actions;

export const { reducer } = singleMovieSlice;
