import { useEffect, useState } from "react";
import { getGenreMovies, toggleSort, toggleSortName } from "./genreMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link, useParams } from "react-router-dom";
import { setQuery } from "../navbar/navbarSlice";

const GenreMovies = () => {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const { name, id } = useParams();
  const { genreMovies, totalItems, totalPages, sortName } = useAppSelector(
    (store) => store.genreMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getGenreMovies(id));
    console.log(genreMovies);
    dispatch(setQuery(""));
  }, [id]);

  return (
    <section className="genreMovie">
      <article className="sorting">
        <div>
          <h3>Films</h3>
          <div>
            {/* <select
              name="sort"
              onChange={(e) => {
                dispatch(toggleSort(e.currentTarget.value));
                dispatch(toggleSortName(e.currentTarget.textContent));
              }}
            >
              <option selected>Sort by {sortName}</option>
              <option value="popularity.desc">Popularity</option>
              <option value="rating">Average Rating</option>
              <option value="date">Release date</option>
              <option value="name">Name</option>
              <option value="revenue">Revenue</option>
            </select> */}
            <ul>
              <li onClick={() => setIsSortOpen(!isSortOpen)}>
                Sort by {sortName}
              </li>
              {isSortOpen ? (
                <ul>
                  <li value="popularity.desc">Popularity</li>
                  <li value="rating">Average Rating</li>
                  <li value="date">Release date</li>
                  <li value="name">Name</li>
                  <li value="revenue">Revenue</li>
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
        {genreMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img src={posterUrl + movie.poster_path} alt="Poster" />
          </Link>
        ))}
      </article>
    </section>
  );
};

export default GenreMovies;
