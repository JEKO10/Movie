import { useEffect } from "react";
import { getGenreMovies } from "./genreMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link, useParams } from "react-router-dom";

const GenreMovies = () => {
  const { name, id } = useParams();
  const { genreMovies } = useAppSelector((store) => store.genreMovies);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getGenreMovies(id!));
    console.log(genreMovies);
  }, []);

  return (
    <section className="genreMovie">
      <h2>{name}</h2>
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
