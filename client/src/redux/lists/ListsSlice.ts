import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const initialState = {
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
});

export const { reducer } = listsSlice;
