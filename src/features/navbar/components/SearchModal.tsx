import React from "react";

import { useAppSelector } from "../../../common/hooks";

const SearchModal = () => {
  const { searchData } = useAppSelector((store) => store.navbar);
  const posterUrl = "https://image.tmdb.org/t/p/w185/";

  return (
    <section>
      {searchData?.map((movie) => (
        <article key={movie.id}>
          <img src={posterUrl + movie.poster_path} alt="POSTER" />
          <div>
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SearchModal;
