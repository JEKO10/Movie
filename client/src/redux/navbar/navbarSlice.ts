import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialNavbar, SearchData } from "../../common/types/typesTS";

const initialState: InitialNavbar = {
  inputValue: "",
  query: "",
  searchData: [],
  selectedMovieId: 0,
  isModalOpen: false,
  isLogOpen: false,
  isMovieModalOpen: false,
  isLogInOpen: false,
  isSignUpOpen: false,
  category: ""
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
        }&query=${navbar.inputValue}&media_type=movie,person,list`
      );

      const filteredResults = resp.data.results.filter((result: SearchData) => {
        if (navbar.category === "movie") {
          return result.media_type === "movie";
        } else if (navbar.category === "person") {
          return result.media_type === "person";
        } else {
          return (
            result.media_type === "movie" || result.media_type === "person"
          );
        }
      });

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
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    setInputValue: (state, { payload }: PayloadAction<string>) => {
      state.inputValue = payload;
    },
    setCategory: (state, { payload }: PayloadAction<string>) => {
      state.category = payload;
    },
    setIsModalOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isModalOpen = payload;
    },
    setIsLogOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogOpen = payload;
      state.inputValue = "";

      if (state.isLogOpen || state.isMovieModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    setIsMovieModalOpen: (
      state,
      action: PayloadAction<{ isOpen: boolean; id: number }>
    ) => {
      state.inputValue = "";
      state.isLogOpen = false;
      state.isMovieModalOpen = action.payload.isOpen;
      state.selectedMovieId = action.payload.id;

      if (state.isMovieModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    setIsLogInOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogInOpen = payload;
      if (state.isLogInOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    setIsSignUpOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isSignUpOpen = payload;
      if (state.isSignUpOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      searchMovies.fulfilled,
      (state, action: PayloadAction<SearchData[]>) => {
        state.searchData = action.payload;
      }
    );
  }
});

export const {
  setQuery,
  setInputValue,
  setIsModalOpen,
  setIsLogOpen,
  setIsMovieModalOpen,
  setIsLogInOpen,
  setIsSignUpOpen,
  setCategory
} = navbarSlice.actions;
export const { reducer } = navbarSlice;
