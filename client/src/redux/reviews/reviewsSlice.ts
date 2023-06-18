import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialReviews, ReviewsResult } from "../../common/types/typesTS";

const initialState: InitialReviews = {
  isLoading: true,
  reviews: [],
};

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${
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

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getReviews.fulfilled,
        (state, action: PayloadAction<ReviewsResult[]>) => {
          state.isLoading = false;
          state.reviews = action.payload;
        }
      )
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer } = reviewsSlice;
