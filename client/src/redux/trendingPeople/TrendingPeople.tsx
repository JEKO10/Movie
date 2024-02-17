import React, { useEffect } from "react";

import { Fade } from "../../assets/style/Fade.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Underline } from "../discoverMovies/DiscoverMovies.styled";
import {
  Title,
  Trend,
  TrendInfo,
  TrendLink,
} from "../trendingMovies/Trending.styled";
import { getTrendingPeople } from "./trendingPeopleSlice";

const Trending = () => {
  const { isLoading, trendingPeople } = useAppSelector(
    (store) => store.trendingPeople
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getTrendingPeople());
  }, []);

  if (isLoading) {
    return <></>;
  }
  return (
    <Trend>
      <Title time="">
        <h2>Popular people this week</h2>
      </Title>
      <Underline></Underline>
      <TrendInfo>
        {trendingPeople?.slice(0, 5).map(({ id, name, profile_path }) => (
          <TrendLink to={`/person/${id}`} key={id} className="trendElement">
            <img
              src={
                profile_path
                  ? posterUrl + profile_path
                  : import.meta.env.VITE_IMG
              }
              alt="Poster"
            />
            <div>
              <h4>{name}</h4>
              {name?.length > 17 && <Fade isTrending={true} />}
            </div>
          </TrendLink>
        ))}
      </TrendInfo>
    </Trend>
  );
};

export default Trending;
