import { configureStore } from "@reduxjs/toolkit";
import { reducer as trendingMoviesReducer } from "../features/trendingMovies/trendingMoviesSlice";
import { reducer as trendingPeopleReducer } from "../features/trendingPeople/trendingPeopleSlice";
import { reducer as singlePersonReducer } from "../features/singlePerson/singlePersonSlice";

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingPeople: trendingPeopleReducer,
    singlePerson: singlePersonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
