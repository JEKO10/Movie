import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialLists, ListsResult } from "../../common/types/typesTS";

const initialState: InitialLists = {
  isLoading: true,
  lists: [],
};

export const getLists = createAsyncThunk(
  "lists/getLists",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/lists?api_key=${
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

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getLists.fulfilled,
        (state, action: PayloadAction<ListsResult[]>) => {
          state.isLoading = false;
          state.lists = action.payload;
        }
      )
      .addCase(getLists.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reducer } = listsSlice;
