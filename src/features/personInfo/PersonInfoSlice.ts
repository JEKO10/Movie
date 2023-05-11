import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import {
  InitialPersonInfo,
  PersonInfo,
  PersonMovies,
} from "../../common/types/typesTS";

const initialState: InitialPersonInfo = {
  isLoading: true,
  personInfo: {} as PersonInfo,
  personMovies: {} as PersonMovies,
  isBioOpen: false,
  page: 1,
};

export const getPerson = createAsyncThunk(
  "personInfo/getPerson",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${
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

export const getMovies = createAsyncThunk(
  "personInfo/getMovies",
  async (id: string | undefined, { getState, rejectWithValue }) => {
    const { page } = getState() as {
      page: number;
    };

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&with_cast=${id}&page=${page}`
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

const personInfoSlice = createSlice({
  name: "personInfo",
  initialState,
  reducers: {
    toggleBio: (state) => {
      state.isBioOpen = !state.isBioOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPerson.pending && getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getPerson.fulfilled,
        (state, action: PayloadAction<PersonInfo>) => {
          state.isLoading = false;
          state.personInfo = action.payload;
        }
      )
      .addCase(getPerson.rejected && getMovies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(
        getMovies.fulfilled,
        (state, action: PayloadAction<PersonMovies>) => {
          state.isLoading = false;
          state.personMovies = action.payload;
        }
      );
  },
});

export const { toggleBio } = personInfoSlice.actions;

export const { reducer } = personInfoSlice;
