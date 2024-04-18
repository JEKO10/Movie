import { isRejectedWithValue } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loader, LoaderWrapper } from "../common/Loader";
import { SearchData } from "../common/types/typesTS";

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
        }&query=${formattedInputValue}&media_type=movie,person`
      );

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
    <section>
      {searchData.map((item: SearchData) => (
        <img
          src={
            item.poster_path
              ? posterUrl + item.poster_path
              : import.meta.env.VITE_IMG
          }
          alt="moviePoster"
          key={item.id}
        />
      ))}
    </section>
  );
};

export default Search;
