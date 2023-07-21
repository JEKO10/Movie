import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import { ErrorPage } from "../assets/style/ErrorPage.styled";

const Error = () => {
  return (
    <ErrorPage>
      <Link to="/">
        <img src={logo} alt="LOGO" />
      </Link>
      <p>
        &quot;I can`t find it.&quot;{"  "}
        <span>
          Get back on <Link to="/">safe</Link>.
        </span>
      </p>
      <h3>
        Please <Link to="/account">contact</Link> us if the problem persists.
      </h3>
      <h4>Sergio Leone’s Once Upon a Time in America (1984)</h4>
    </ErrorPage>
  );
};

export default Error;
