import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `https://api.themoviedb.org/3/movie/297802?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=images,credits`;

type InitialStateType = {
  isLoading: boolean;
  allMovies: string[];
};

const initialState: InitialStateType = {
  isLoading: true,
  allMovies: [],
};

const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (query: string, thunkAPI) => {
    try {
      const resp = await axios(url);
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
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allMovies = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { reducer } = moviesSlice;
