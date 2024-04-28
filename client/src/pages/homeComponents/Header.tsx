import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";

import poster from "../../assets/images/poster.png";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { getTrending } from "../../redux/trendingMovies/trendingMoviesSlice";
import { Header as Container, HeaderRating, HeaderSlides } from "./Home.style";

const Header = () => {
  const [slide, setSlide] = useState(1);
  const { trendingMovies, time, isLoading } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const backdropUrl = "https://image.tmdb.org/t/p/w500/";

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newIndex = parseInt(
      e.currentTarget.getAttribute("data-index") || "1"
    );

    setSlide(newIndex);
  };

  useEffect(() => {
    dispatch(getTrending(time));

    console.log(trendingMovies);
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
      <article>
        <div>
          <h3>
            {trendingMovies[0].title ||
              trendingMovies[0].original_title ||
              trendingMovies[0].original_name}
          </h3>
          <p>{trendingMovies[0].overview.slice(0, 220)}...</p>
          <h5>{trendingMovies[0].release_date.slice(0, 4)}</h5>
          <button>Rate</button>
          <HeaderSlides slide={slide}>
            <div data-index={1} onClick={handleClick} />
            <div data-index={2} onClick={handleClick} />
            <div data-index={3} onClick={handleClick} />
            <div data-index={4} onClick={handleClick} />
          </HeaderSlides>
        </div>
        <img
          src={backdropUrl + trendingMovies[0].backdrop_path}
          alt="backdropImg"
        />
        <HeaderRating>
          <span>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </span>
          <p>4.2/5</p>
        </HeaderRating>
      </article>
      <article>
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
      </article>
    </Container>
  );
};

export default Header;
