import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

import { InitialPersonInfo, PersonInfo } from "../../common/types/typesTS";

const initialState: InitialPersonInfo = {
  isLoading: true,
  personInfo: {} as PersonInfo,
  personMovies: [],
  isBioOpen: false,
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

// export const getMovies = createAsyncThunk(
//   "personInfo/getMovies",
//   async (id: string | undefined, { getState, rejectWithValue }) => {
//     const { total_pages } = getState() as {
//       total_pages: PersonMovies;
//     };

//     try {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/discover/movie?api_key=${
//           import.meta.env.VITE_API_KEY
//         }&with_cast=${id}&page=${total_pages}`
//       );
//       return response.data;
//     } catch (error) {
//       if (isAxiosError(error)) {
//         return rejectWithValue(error.response);
//       }
//     }
//   }
// );

export const getMovies = createAsyncThunk(
  "personInfo/getMovies",
  async (id: string | undefined, { rejectWithValue }) => {
    const returnerData = [];

    try {
      for (let i = 1; i <= 3; i++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&with_cast=${id}&page=${i}`
        );

        returnerData.push(...response.data.results);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
    }

    return returnerData;
  }
);

const personInfoSlice = createSlice({
  name: "personInfo",
  initialState,
  reducers: {
    toggleBio: (state, { payload }: { payload: boolean }) => {
      state.isBioOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPerson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPerson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.personInfo = action.payload;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.personMovies = action.payload;
      })
      .addCase(getPerson.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleBio } = personInfoSlice.actions;

export const { reducer } = personInfoSlice;
