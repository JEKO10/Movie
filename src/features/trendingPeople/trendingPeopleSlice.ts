import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialTrendPeople, Trending } from "../../common/types/typesTS";

const initialState: InitialTrendPeople = {
  isLoading: true,
  trendingPeople: [],
};

export const getTrendingPeople = createAsyncThunk(
  "trendingPeople/getTrending",
  async (data, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/person/week?api_key=${
          import.meta.env.VITE_API_KEY
        }&adult=false`
      );

      return resp.data.results;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

const trendingPeopleSlice = createSlice({
  name: "trendingPeople",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingPeople.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTrendingPeople.fulfilled,
        (state, action: PayloadAction<Trending[]>) => {
          state.isLoading = false;
          state.trendingPeople = action.payload;
        }
      )
      .addCase(getTrendingPeople.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer } = trendingPeopleSlice;
