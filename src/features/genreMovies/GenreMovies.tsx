import { useEffect } from "react";
import { getGenreMovies } from "./genreMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link, useParams } from "react-router-dom";

const GenreMovies = () => {
  const { name, id } = useParams();
  const { genreMovies, totalItems, totalPages } = useAppSelector(
    (store) => store.genreMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getGenreMovies(id));
  }, [id]);

  return (
    <section className="genreMovie">
      <article className="sorting">
        <div>
          <h3>Films</h3>
          <div>
            <select name="sort">
              <option>Sort by...</option>
              <option value="popularity">Popularity</option>
              <option value="date">Release date</option>
              <option value="name">Name</option>
            </select>
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
