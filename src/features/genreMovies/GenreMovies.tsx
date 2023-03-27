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

  const changeSort = (event) => {
    const value = event.target.getAttribute("value");
    const name = event.target.innerText;

    dispatch(toggleSort(value));
    dispatch(toggleSortName(name));
    dispatch(getGenreMovies(id));
    setIsSortOpen(false);
  };

  useEffect(() => {
    dispatch(getGenreMovies(id));
    dispatch(setQuery(""));
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
                  <li value="original_title.desc" onClick={changeSort}>
                    Name
                  </li>
                  <li value="revenue.desc" onClick={changeSort}>
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
