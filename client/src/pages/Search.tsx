import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { inputValue } = useParams();

  return <section>{inputValue}</section>;
};

export default Search;
