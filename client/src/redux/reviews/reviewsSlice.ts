import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialReviews } from "../../common/types/typesTS";

const initialState: InitialReviews = {
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

      return resp.data;
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
});

export const { reducer } = reviewsSlice;
