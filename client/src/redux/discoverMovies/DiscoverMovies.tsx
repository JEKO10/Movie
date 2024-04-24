import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { setQuery } from "../navbar/navbarSlice";
import Pagination from "./components/Pagination";
import {
  Discover,
  MoviesList,
  Sorting,
  SortList,
  Underline
} from "./DiscoverMovies.styled";
import {
  getDiscoverMovies,
  toggleSort,
  toggleSortName
} from "./discoverMoviesSlice";

const DiscoverMovies = () => {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>("popularity.desc");
  const [currentPage, setCurrentPage] = useState(1);
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
    setSelectedSort(value || "");
    setIsSortOpen(false);
  };

  useEffect(() => {
    dispatch(getDiscoverMovies({ id }));
    dispatch(setQuery(""));
  }, [id]);

  return (
    <Discover>
      <Sorting>
        <div>
          <h3>Films</h3>
          <div>
            <SortList>
              <li onClick={() => setIsSortOpen(!isSortOpen)}>
                Sort by {sortName} <MdOutlineKeyboardArrowDown />
              </li>
              {isSortOpen && (
                <ul>
                  <li
                    value="popularity.desc"
                    onClick={changeSort}
                    style={{
                      color: selectedSort === "popularity.desc" ? "#fff" : ""
                    }}
                  >
                    Popularity
                  </li>
                  <li
                    value="vote_average.desc"
                    onClick={changeSort}
                    style={{
                      color: selectedSort === "vote_average.desc" ? "#fff" : ""
                    }}
                  >
                    Average Rating
                  </li>
                  <li
                    value="primary_release_date.desc"
                    onClick={changeSort}
                    style={{
                      color:
                        selectedSort === "primary_release_date.desc"
                          ? "#fff"
                          : ""
                    }}
                  >
                    Release date
                  </li>
                  <li
                    value="original_title.desc"
                    onClick={changeSort}
                    style={{
                      color:
                        selectedSort === "original_title.desc" ? "#fff" : ""
                    }}
                  >
                    Name
                  </li>
                  <li
                    value="revenue.desc"
                    onClick={changeSort}
                    style={{
                      color: selectedSort === "revenue.desc" ? "#fff" : ""
                    }}
                  >
                    Revenue
                  </li>
                </ul>
              )}
            </SortList>
          </div>
        </div>
        <Underline />
        <p>
          There are {totalItems}
          <span>{name}</span>
          films.
        </p>
      </Sorting>
      {!isLoading ? (
        <MoviesList isCollection={false}>
          {discoverMovies?.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? posterUrl + movie.poster_path
                    : import.meta.env.VITE_IMG
                }
                alt="Poster"
              />
            </Link>
          ))}
        </MoviesList>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <Pagination
        id={id}
        totalItems={totalItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={100}
      />
    </Discover>
  );
};

export default DiscoverMovies;
