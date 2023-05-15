import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Discover,
  MoviesList,
  Sorting,
  SortList,
  Underline,
} from "../../assets/style/DiscoverMovies.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { setQuery } from "../navbar/navbarSlice";
import {
  getDiscoverMovies,
  toggleSort,
  toggleSortName,
} from "./discoverMoviesSlice";

const DiscoverMovies = () => {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const { name, id } = useParams();
  const { discoverMovies, totalItems, sortName, isLoading } = useAppSelector(
    (store) => store.discoverMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w185/";

  const changeSort = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = event.currentTarget.getAttribute("value");
    const name = event.currentTarget.textContent;

    if (value) dispatch(toggleSort(value));
    if (name) dispatch(toggleSortName(name));
    dispatch(getDiscoverMovies({ id }));
    setIsSortOpen(false);
  };

  useEffect(() => {
    dispatch(getDiscoverMovies({ id }));
    dispatch(setQuery(""));
  }, [id]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <Discover>
      <Sorting>
        <div>
          <h3>Films</h3>
          <div>
            <SortList>
              <li onClick={() => setIsSortOpen(!isSortOpen)}>
                Sort by {sortName}
              </li>
              {isSortOpen ? (
                <ul>
                  <li value="popularity.desc" onClick={changeSort}>
                    Popularity
                  </li>
                  <li value="vote_average.desc" onClick={changeSort}>
                    Average Rating
                  </li>
                  <li value="primary_release_date.desc" onClick={changeSort}>
                    Release date
                  </li>
                  <li
                    value="original_title.desc"
                    onClick={(event) => changeSort(event)}
                  >
                    Name
                  </li>
                  <li
                    value="revenue.desc"
                    onClick={(event) => changeSort(event)}
                  >
                    Revenue
                  </li>
                </ul>
              ) : (
                ""
              )}
            </SortList>
          </div>
        </div>
        <Underline></Underline>
        <p>
          There are{" "}
          {/* {totalItems.toString().slice(0, 2) +
            "," +
            totalItems.toString().slice(2)} */}
          {totalItems}
          <span>{name}</span>
          films.
        </p>
      </Sorting>
      <MoviesList>
        {discoverMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img src={posterUrl + movie.poster_path} alt="Poster" />
          </Link>
        ))}
      </MoviesList>
    </Discover>
  );
};

export default DiscoverMovies;
