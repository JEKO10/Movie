import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type MovieInfoType = {
  name: string;
};

type InitialStateType = {
  isLoading: boolean;
  movieInfo: MovieInfoType;
};

const initialState: InitialStateType = {
  isLoading: true,
  movieInfo: <MovieInfoType>{},
};

export const getMovie = createAsyncThunk(
  "singleMovie/getMovie",
  async (id: string | undefined, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
      );
      return resp.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {},
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

export const { reducer } = singleMovieSlice;
