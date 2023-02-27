import { configureStore } from "@reduxjs/toolkit";
import { reducer as trendingMoviesReducer } from "../features/trendingMovies/trendingMoviesSlice";
import { reducer as trendingPeopleReducer } from "../features/trendingPeople/trendingPeopleSlice";
import { reducer as PersonInfoReducer } from "../features/personInfo/PersonInfoSlice";
import { reducer as singleMovieReducer } from "../features/singleMovie/singleMovieSlice";
import { reducer as navbarReducer } from "../features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingPeople: trendingPeopleReducer,
    personInfo: PersonInfoReducer,
    singleMovie: singleMovieReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
