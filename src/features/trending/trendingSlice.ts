import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

type User = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type InitialStateType = {
  isLoading: boolean;
  trendingMovies: User[];
};

const initialState: InitialStateType = {
  isLoading: true,
  trendingMovies: [],
};

export const getTrending = createAsyncThunk(
  "movies/getTrending",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrending.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTrending.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.trendingMovies = action.payload;
        }
      )
      .addCase(getTrending.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer } = moviesSlice;
