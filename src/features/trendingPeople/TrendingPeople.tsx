import React, { useEffect } from "react";

import { Underline } from "../../assets/style/DiscoverMovies.style";
import {
  Title,
  Trend,
  TrendInfo,
  TrendLink,
} from "../../assets/style/Trending.style";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
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
      <Title>
        <h2>Popular people this week</h2>
      </Title>
      <Underline></Underline>
      <TrendInfo>
        {trendingPeople?.slice(0, 5).map(({ id, name, profile_path }) => (
          <TrendLink to={`/person/${id}`} key={id} className="trendElement">
            <img src={posterUrl + profile_path} alt="Poster" />
            <div>
              <h4>{name}</h4>
              {name?.length > 17 ? <div></div> : ""}
            </div>
          </TrendLink>
        ))}
      </TrendInfo>
    </Trend>
  );
};

export default Trending;
