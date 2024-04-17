import { isRejectedWithValue } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SearchData } from "../common/types/typesTS";

const Search = () => {
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const { inputValue } = useParams();

  const getSearchData = async () => {
    try {
      const formattedInputValue = inputValue?.replace(/\s+/g, "+");

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${formattedInputValue}&media_type=movie,person`
      );

      setSearchData(response.data.results);
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

  return (
    <section>
      {searchData.map((item: SearchData) => (
        <img
          src={`http://image.tmdb.org/t/p/w154/` + item.poster_path}
          alt="moviePoster"
          key={item.id}
        />
      ))}
    </section>
  );
};

export default Search;
