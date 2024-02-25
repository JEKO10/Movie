import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialNavbar, SearchData } from "../../common/types/typesTS";

const initialState: InitialNavbar = {
  inputValue: "",
  query: "",
  searchData: [],
  isModalOpen: false,
  isLogOpen: false,
  isLogSearchOpen: false,
};

export const searchMovies = createAsyncThunk(
  "navbar/searchMovies",
  async (_, { getState, rejectWithValue }) => {
    const { navbar } = getState() as {
      navbar: InitialNavbar;
    };

    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${navbar.inputValue}&media_type=movie,person`
      );

      const filteredResults = resp.data.results.filter(
        (result: SearchData) =>
          result.media_type === "movie" || result.media_type === "person"
      );

      return filteredResults;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }
  }
);

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setQuery: (state, { payload }: { payload: string }) => {
      state.query = payload;
    },
    setInputValue: (state, { payload }: { payload: string }) => {
      state.inputValue = payload;
    },
    setIsModalOpen: ((state, {payload}: { payload: boolean }) => {
      state.isModalOpen = payload;
    }),
    setIsLogOpen: ((state, {payload}: { payload: boolean }) => {
      state.isLogOpen = payload;
      
      if (state.isLogOpen) {
        document.body.style.overflow= "hidden";
      } else {
        document.body.style.overflow= "auto";
      }
    }),
    setIsLogSearchOpen:((state, { payload } : { payload: boolean }) => {
      state.isLogSearchOpen = payload;
    })
  },
  extraReducers: (builder) => {
    builder.addCase(
      searchMovies.fulfilled,
      (state, action: PayloadAction<SearchData[]>) => {
        state.searchData = action.payload;
      }
    );
  },
});

export const { setQuery, setInputValue, setIsModalOpen, setIsLogOpen, setIsLogSearchOpen } = navbarSlice.actions;
export const { reducer } = navbarSlice;
