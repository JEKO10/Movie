import React, { useEffect, useState } from "react";
import {
  getDiscoverMovies,
  toggleSort,
  toggleSortName,
  toggleDiscover,
} from "./discoverMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link, useParams } from "react-router-dom";
import { setQuery } from "../navbar/navbarSlice";

const DiscoverMovies = () => {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const { name, id } = useParams();
  const { discoverMovies, totalItems, totalPages, sortName } = useAppSelector(
    (store) => store.discoverMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  const changeSort = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = event.currentTarget.getAttribute("value");
    const name = event.currentTarget.textContent;

    if (value) dispatch(toggleSort(value));
    if (name) dispatch(toggleSortName(name));
    dispatch(getDiscoverMovies(id));
    setIsSortOpen(false);
  };

  useEffect(() => {
    dispatch(getDiscoverMovies(id));
    dispatch(setQuery(""));
    dispatch(toggleDiscover("keywords"));
  }, [id]);

  return (
    <section className="discover">
      <article className="sorting">
        <div>
          <h3>Films</h3>
          <div>
            <ul>
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
            </ul>
          </div>
        </div>
        <div className="underline"></div>
        <p>
          There are{" "}
          {totalItems.toString().slice(0, 2) +
            "," +
            totalItems.toString().slice(2)}
          <span>{name}</span>
          films.
        </p>
      </article>
      <article>
        {discoverMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img src={posterUrl + movie.poster_path} alt="Poster" />
          </Link>
        ))}
      </article>
    </section>
  );
};

export default DiscoverMovies;
