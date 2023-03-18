import { configureStore } from "@reduxjs/toolkit";
import { reducer as trendingMoviesReducer } from "../features/trendingMovies/trendingMoviesSlice";
import { reducer as trendingPeopleReducer } from "../features/trendingPeople/trendingPeopleSlice";
import { reducer as personInfoReducer } from "../features/personInfo/personInfoSlice";
import { reducer as singleMovieReducer } from "../features/singleMovie/singleMovieSlice";
import { reducer as navbarReducer } from "../features/navbar/navbarSlice";
import { reducer as genreMoviesReducer } from "../features/genreMovies/genreMoviesSlice";
import { reducer as keywordMoviesReducer } from "../features/keywords/keywordMoviesSlice";

export const store = configureStore({
  reducer: {
    trendingMovies: trendingMoviesReducer,
    trendingPeople: trendingPeopleReducer,
    personInfo: personInfoReducer,
    singleMovie: singleMovieReducer,
    navbar: navbarReducer,
    genreMovies: genreMoviesReducer,
    keywordMovies: keywordMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
