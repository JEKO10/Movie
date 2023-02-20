import { configureStore } from "@reduxjs/toolkit";
import { reducer as trendingMoviesReducer } from "../features/trendingMovies/trendingMoviesSlice";
import { reducer as trendingPeopleReducer } from "../features/trendingPeople/trendingPeopleSlice";
import { reducer as singlePersonReducer } from "../features/singlePerson/singlePersonSlice";
import { reducer as singleMovieSlice } from "../features/singleMovie/singleMovieSlice";

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingPeople: trendingPeopleReducer,
    singlePerson: singlePersonReducer,
    singleMovie: singleMovieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
