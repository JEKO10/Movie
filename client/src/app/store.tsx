import { configureStore } from "@reduxjs/toolkit";

import { reducer as discoverReducer } from "../redux/discoverMovies/discoverMoviesSlice";
import { reducer as ListsReducer } from "../redux/lists/listsSlice";
import { reducer as navbarReducer } from "../redux/navbar/navbarSlice";
import { reducer as personInfoReducer } from "../redux/personInfo/personInfoSlice";
import { reducer as profileReducer } from "../redux/profile/profileSlice";
import { reducer as ReviewsReducer } from "../redux/reviews/reviewsSlice";
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
    profile: profileReducer,
    lists: ListsReducer,
    reviews: ReviewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
