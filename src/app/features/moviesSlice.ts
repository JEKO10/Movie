import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: true,
    movies: [],
  },
});
