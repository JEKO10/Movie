import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import RandomStyledError from "../assets/style/ErrorPage.styled";
import { Loader, LoaderWrapper } from "../common/Loader";

const Error = () => {
  const { component: ErrorComponent, movie } = RandomStyledError;

  const getMovieTitle = (movie: number) => {
    const text = {
      intro: "",
      movieName: "",
    };
    switch (movie) {
      case 0:
        text.intro = "'I can't find her. She checked out of the hotel.' ";
        text.movieName = "Michael Curtiz’s Casablanca (1942)";
        return text;
      case 1:
        text.intro = "'I can't find it.' ";
        text.movieName = "Sergio Leone’s Once Upon a Time in America (1984)";
        return text;
      case 2:
        text.intro = "'I can't find it anywhere.' ";
        text.movieName = "Frank Capra’s It’s a Wonderful Life (1946)";
        return text;
      case 3:
        text.intro = "'Where is it? I can't even find it.' ";
        text.movieName = "Antoine Fuqua’s Training Day (2001)";
        return text;
      case 4:
        text.intro =
          "'But, Mom, I can't find him!\nHoney, just grab some other' link. ";
        text.movieName = "John Lasseter’s Toy Story (1995)";
        return text;
      default:
        text.intro = "'I can't find it.' ";
        text.movieName = "Sergio Leone’s Once Upon a Time in America (1984)";
        return text;
    }
  };

  const text = {
    intro: getMovieTitle(movie).intro,
    movie: getMovieTitle(movie).movieName,
  };

  if (!ErrorComponent || !movie) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <ErrorComponent>
      <article>
        <Link to="/">
          <img src={logo} alt="LOGO" />
        </Link>
        <p>
          <p
            dangerouslySetInnerHTML={{
              __html: text.intro.replace(/\n/g, "<br>"),
            }}
          />
          <span>
            Get back on <Link to="/">safe</Link>.
          </span>
        </p>
        <h3>
          Please <Link to="/account">contact</Link> us if the problem persists.
        </h3>
        <h4>{text.movie}</h4>
      </article>
    </ErrorComponent>
  );
};

export default Error;
