import React, { useEffect } from "react";

import { Underline } from "../../assets/style/DiscoverMovies.style";
import {
  Title,
  Trend,
  TrendInfo,
  TrendLink,
} from "../../assets/style/Trending.style";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { changeTime, getTrending } from "./trendingMoviesSlice";

const Trending = () => {
  const { isLoading, trendingMovies, time } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(getTrending(time));
  }, [time]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <Trend className="trending">
      <Title>
        <h2>Popular movies</h2>
        <select
          name="time"
          onChange={(e) => dispatch(changeTime(e.currentTarget.value))}
          style={{ width: time === "day" ? "80px" : "120px" }}
        >
          <option value="day">Today</option>
          <option value="week">This week</option>
        </select>
      </Title>
      <Underline></Underline>
      <TrendInfo>
        {trendingMovies?.slice(0, 5).map(({ id, title, name, poster_path }) => (
          <TrendLink to={`/movie/${id}`} key={id} className="trendElement">
            <img src={posterUrl + poster_path} alt="Poster" />
            <div>
              <h4>{title ? title : name}</h4>
              {title?.length > 17 || name?.length > 17 ? <div></div> : ""}
            </div>
          </TrendLink>
        ))}
      </TrendInfo>
    </Trend>
  );
};

export default Trending;
