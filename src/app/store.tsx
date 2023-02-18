import { configureStore } from "@reduxjs/toolkit";
import { reducer as moviesReducer } from "../features/trendingMovie/trendingMovieSlice";
import { reducer as peopleReducer } from "../features/trendingPeople/trendingPeopleSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
