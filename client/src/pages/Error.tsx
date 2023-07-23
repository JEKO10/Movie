import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import RandomStyledError from "../assets/style/ErrorPage.styled";

const Error = () => {
  const { component: ErrorComponent, movie } = RandomStyledError;

  const getMovieTitle = (movie: number) => {
    switch (movie) {
      case 0:
        return "Casablanca (1942)";
      case 1:
        return "Sergio Leone’s Once Upon a Time in America (1984)";
      case 2:
        return "It's a Wonderful Life (1946)";
      default:
        return "Sergio Leone’s Once Upon a Time in America (1984)";
    }
  };

  const text = {
    intro: "ASD",
    movie: getMovieTitle(movie),
  };

  return (
    <ErrorComponent>
      <img src={logo} alt="LOGO" />
      <p>
        {text.intro}{" "}
        <span>
          Get back on <Link to="/">safe</Link>.
        </span>
      </p>
      <h3>
        Please <Link to="/account">contact</Link> us if the problem persists.
      </h3>
      <h4>{text.movie}</h4>
    </ErrorComponent>
  );
};

export default Error;
