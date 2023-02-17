import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
};

type InitialStateType = {
  isLoading: boolean;
  trendingMovies: User[];
  time: string;
};

const initialState: InitialStateType = {
  isLoading: true,
  trendingMovies: [],
  time: "day",
};

export const getTrending = createAsyncThunk(
  "movies/getTrending",
  async (time: string, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/all/${time}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return resp.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    changeTime: (state) => {
      if (state.time === "day") {
        state.time = "week";
      } else {
        state.time = "day";
      }
    },
  },
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

export const { changeTime } = moviesSlice.actions;

export const { reducer } = moviesSlice;
