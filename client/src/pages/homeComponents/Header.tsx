import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

import poster from "../../assets/images/poster.png";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { MovieCreditsType } from "../../common/types/typesTS";
import { getTrending } from "../../redux/trendingMovies/trendingMoviesSlice";
import {
  Header as Container,
  HeaderInfo,
  HeaderMovie,
  HeaderRating,
  HeaderSlides
} from "./Home.style";

type GenreList = {
  id: number;
  name: string;
};

const Header = () => {
  const [slide, setSlide] = useState(0);
  const [movieCredits, setMovieCredits] = useState<MovieCreditsType>();
  const [genresList, setGenresList] = useState<GenreList[]>();
  const { trendingMovies, time, isLoading } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const backdropUrl = "https://image.tmdb.org/t/p/w1280/";

  const handleClick = async (index: number) => {
    setSlide(index);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${trendingMovies[index]?.id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
      );

      setMovieCredits(response.data);
    } catch (error) {
      console.error("Error fetching credits:", error);
    }
  };

  useEffect(() => {
    dispatch(getTrending(time));

    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=57f3cbeef6fb415a143ea528978252e4&language=en-US`
      )
      .then((response) => {
        setGenresList(response.data.genres);
      });
  }, [time]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <Container>
      <HeaderMovie slide={slide}>
        {trendingMovies.slice(0, 4).map((movie) => (
          <article key={movie.id}>
            <div>
              <h3>
                {movie.title.slice(0, 14) ||
                  movie.original_title.slice(0, 14) ||
                  movie.original_name.slice(0, 14)}
                {movie.title?.length > 14 ||
                movie.original_title?.length > 14 ||
                movie.original_name?.length > 14
                  ? "..."
                  : ""}
              </h3>
              <p>{movie.overview.slice(0, 200)}...</p>
              <h5>{movie.release_date.slice(0, 4)}</h5>
              <button>
                <Link to={`/movie/${movie.id}`}>Rate</Link>
              </button>
            </div>
            <img src={backdropUrl + movie.backdrop_path} alt="backdropImg" />
            <HeaderRating>
              <span>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              <p>{movie.vote_average}</p>
            </HeaderRating>
          </article>
        ))}
        <HeaderSlides slide={slide}>
          <div onClick={() => handleClick(0)} />
          <div onClick={() => handleClick(1)} />
          <div onClick={() => handleClick(2)} />
          <div onClick={() => handleClick(3)} />
        </HeaderSlides>
      </HeaderMovie>
      <HeaderInfo>
        <div>
          <img src={poster} alt="Director" />
          <span>
            <h4>Director:</h4>
            <p>
              {
                movieCredits?.crew.find(
                  (person) =>
                    person.job === "Director" ||
                    person.known_for_department === "Directing"
                )?.name
              }
            </p>
          </span>
        </div>
        <div>
          <img src={poster} alt="Director" />
          <span>
            <h4>Main actor:</h4>
            <p>{movieCredits?.cast[0].name}</p>
          </span>
        </div>
        <div>
          <h4>Genre:</h4>
          <ul>
            {trendingMovies[slide].genre_ids.map((id) => {
              const genre = genresList?.find((genre) => genre.id === id);

              return genre && <li key={genre.id}>#{genre.name}</li>;
            })}
          </ul>
        </div>
      </HeaderInfo>
    </Container>
  );
};

export default Header;
