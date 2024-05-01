import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

import poster from "../../assets/images/poster.png";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { getTrending } from "../../redux/trendingMovies/trendingMoviesSlice";
import {
  Header as Container,
  HeaderInfo,
  HeaderMovie,
  HeaderRating,
  HeaderSlides
} from "./Home.style";

const Header = () => {
  const [slide, setSlide] = useState(0);
  const { trendingMovies, time, isLoading } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const backdropUrl = "https://image.tmdb.org/t/p/w1280/";

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newIndex = parseInt(
      e.currentTarget.getAttribute("data-index") || "0"
    );

    setSlide(newIndex);

    console.log(trendingMovies);
  };

  useEffect(() => {
    dispatch(getTrending(time));
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
      <HeaderMovie>
        <article>
          <div>
            <h3>
              {trendingMovies[slide].title.slice(0, 14) ||
                trendingMovies[slide].original_title.slice(0, 14) ||
                trendingMovies[slide].original_name.slice(0, 14)}
              {trendingMovies[slide].title?.length > 14 ||
              trendingMovies[slide].original_title?.length > 14 ||
              trendingMovies[slide].original_name?.length > 14
                ? "..."
                : ""}
            </h3>
            <p>{trendingMovies[slide].overview.slice(0, 200)}...</p>
            <h5>{trendingMovies[slide].release_date.slice(0, 4)}</h5>
            <button>
              <Link to={`/movie/${trendingMovies[slide].id}`}>Rate</Link>
            </button>
          </div>
          <img
            src={backdropUrl + trendingMovies[slide].backdrop_path}
            alt="backdropImg"
          />
        </article>
        <HeaderRating>
          <span>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </span>
          <p>{trendingMovies[slide].vote_average}</p>
        </HeaderRating>
        <HeaderSlides slide={slide}>
          <div data-index={0} onClick={handleClick} />
          <div data-index={1} onClick={handleClick} />
          <div data-index={2} onClick={handleClick} />
          <div data-index={3} onClick={handleClick} />
        </HeaderSlides>
      </HeaderMovie>
      <HeaderInfo>
        <div>
          <img src={poster} alt="Director" />
          <span>
            <h4>Director:</h4>
            <p>Stanley Kubrick</p>
          </span>
        </div>
        <div>
          <img src={poster} alt="Director" />
          <span>
            <h4>Main actor:</h4>
            <p>Tom Cruise</p>
          </span>
        </div>
        <div>
          <h4>Genre:</h4>
          <ul>
            <li>#Wartime</li>
            <li>#Adventure</li>
            <li>#Action</li>
            <li>#Noir</li>
            <li>#Slasher</li>
            <li>#Drama</li>
            <li>#Propaganda</li>
            <li>#Suspense</li>
          </ul>
        </div>
      </HeaderInfo>
    </Container>
  );
};

export default Header;
