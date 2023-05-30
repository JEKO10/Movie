import { configureStore } from "@reduxjs/toolkit";

import { reducer as discoverReducer } from "../redux/discoverMovies/discoverMoviesSlice";
import { reducer as navbarReducer } from "../redux/navbar/navbarSlice";
import { reducer as personInfoReducer } from "../redux/personInfo/personInfoSlice";
import { reducer as singleMovieReducer } from "../redux/singleMovie/singleMovieSlice";
import { reducer as trendingMoviesReducer } from "../redux/trendingMovies/trendingMoviesSlice";
import { reducer as trendingPeopleReducer } from "../redux/trendingPeople/trendingPeopleSlice";

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingPeople: trendingPeopleReducer,
    personInfo: personInfoReducer,
    singleMovie: singleMovieReducer,
    navbar: navbarReducer,
    discoverMovies: discoverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
