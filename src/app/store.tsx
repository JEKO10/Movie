import { configureStore } from "@reduxjs/toolkit";
import { reducer as trendingMoviesReducer } from "../features/trendingMovies/trendingMoviesSlice";
import { reducer as trendingPeopleReducer } from "../features/trendingPeople/trendingPeopleSlice";
import { reducer as personInfoReducer } from "../features/personInfo/personInfoSlice";
import { reducer as singleMovieReducer } from "../features/singleMovie/singleMovieSlice";
import { reducer as navbarReducer } from "../features/navbar/navbarSlice";
import { reducer as discoverReducer } from "../features/discoverMovies/discoverMovies";

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
