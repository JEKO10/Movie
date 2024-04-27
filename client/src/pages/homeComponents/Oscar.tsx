import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { getTrending } from "../../redux/trendingMovies/trendingMoviesSlice";
import { Oscar as Container } from "./Home.style";

const Oscar = () => {
  const { trendingMovies, time } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(getTrending(time));
  }, [time]);

  return (
    <Container>
      <h2>And the Oscar Goes to...</h2>
      <article>
        {trendingMovies?.slice(0, 6).map(({ id, poster_path }) => (
          <Link to={`/movie/${id}`} key={id}>
            <img
              src={
                poster_path ? posterUrl + poster_path : import.meta.env.VITE_IMG
              }
              alt="Poster"
            />
          </Link>
        ))}
      </article>
    </Container>
  );
};

export default Oscar;
