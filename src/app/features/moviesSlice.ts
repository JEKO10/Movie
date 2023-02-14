import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

type User = {
  id: number;
  title: string;
  price: string;
  img: string;
  amount: number;
};

type InitialStateType = {
  isLoading: boolean;
  allMovies: User[];
};

const initialState: InitialStateType = {
  allMovies: [],
  isLoading: true,
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      return resp.data;
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
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.allMovies = action.payload;
      })
      .addCase(getMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer } = moviesSlice;
