import { isRejectedWithValue } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Loader, LoaderWrapper } from "../../common/Loader";
import { SearchData } from "../../common/types/typesTS";
import { Underline } from "../../redux/singleMovie/SingleMovie.styled";
import { SearchContainer } from "./Search.style";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const { inputValue } = useParams();
  const posterUrl = "https://image.tmdb.org/t/p/w342/";

  const getSearchData = async () => {
    setIsLoading(true);

    try {
      const formattedInputValue = inputValue?.replace(/\s+/g, "+");

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${formattedInputValue}&sort_by=popularity.desc`
      );

      const movies = response.data.results;

      const creditPromises = movies.map(async (movie: SearchData) => {
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
      });

      await Promise.all(creditPromises);

      setSearchData(movies);

      setIsLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        return isRejectedWithValue(error.response);
      }
    }
  };

  useEffect(() => {
    getSearchData();

    console.log(searchData);
  }, [inputValue]);

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
      <Underline width={"100%"} margin="0 0 1rem" />
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
                <p>{movie.overview}</p>
                {movie.credits.crew.length !== 0 && (
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
    </SearchContainer>
  );
};

export default Search;
