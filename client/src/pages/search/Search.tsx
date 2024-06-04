import { isRejectedWithValue } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Loader, LoaderWrapper } from "../../common/Loader";
import { SearchData } from "../../common/types/typesTS";
import Pagination from "../../redux/discoverMovies/components/Pagination";
import { Underline } from "../../redux/singleMovie/SingleMovie.styled";
import { SearchContainer } from "./Search.style";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const { inputValue } = useParams();
  const posterUrl = "https://image.tmdb.org/t/p/w342/";
  const pages = [];
  const totalPages = Math.ceil(totalItems / 20);

  for (let i = 0; i <= totalPages; i++) {
    pages.push(i);
  }

  const getSearchData = async () => {
    setIsLoading(true);

    try {
      const formattedInputValue = inputValue?.replace(/\s+/g, "+");

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${formattedInputValue}&sort_by=popularity.desc&page=${currentPage}`
      );

      setTotalItems(response.data.total_results);

      const creditPromises = response.data.results.map(
        async (movie: SearchData) => {
          if (movie.media_type === "movie") {
            const creditsResponse = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
            );

            movie.credits = creditsResponse.data;
          } else if (movie.media_type === "tv") {
            const creditsResponse = await axios.get(
              `https://api.themoviedb.org/3/tv/${movie.id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
            );

            movie.credits = creditsResponse.data;
          }
        }
      );

      await Promise.all(creditPromises);

      setSearchData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        return isRejectedWithValue(error.response);
      }
    }
  };

  useEffect(() => {
    getSearchData();
  }, [inputValue, currentPage]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <SearchContainer>
      <p>
        Found {searchData.length} matches for “{inputValue}”
      </p>
      <Underline width={"100%"} margin="0 0 2rem" />
      <article>
        {searchData.map((movie: SearchData) => (
          <>
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <img
                loading="lazy"
                src={
                  movie.poster_path
                    ? posterUrl + movie.poster_path
                    : import.meta.env.VITE_IMG
                }
                alt="moviePoster"
                key={movie.id}
              />
              <div>
                <h3>
                  {movie.title || movie.original_title || movie.original_name}
                  <span>{movie.release_date?.slice(0, 4)}</span>
                </h3>
                <p>
                  {movie.overview.slice(0, 230)}{" "}
                  {movie.overview.length > 230 && "..."}
                </p>
                {movie.credits && movie.credits.crew.length !== 0 && (
                  <h4>
                    Directed by{"  "}
                    <span>
                      {
                        movie.credits?.crew.find(
                          (person) =>
                            person.job === "Director" ||
                            person.known_for_department === "Directing"
                        )?.name
                      }
                    </span>
                  </h4>
                )}
              </div>
            </Link>
            <Underline width={"100%"} margin="0 0 1rem" />
          </>
        ))}
      </article>
      {searchData.length > 0 && (
        <Pagination
          totalItems={totalItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={20}
        />
      )}
    </SearchContainer>
  );
};

export default Search;
