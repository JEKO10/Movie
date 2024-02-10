import React from "react";

import poster from "../assets/images/poster.jpg";
import { Oscar as Container } from "./Temp.style";

const Oscar = () => {
  return (
    <Container>
      <h2>And the Oscar Goes to...</h2>
      <article>
        <img src={poster} alt="poster" />
        <img src={poster} alt="poster" />
        <img src={poster} alt="poster" />
        <img src={poster} alt="poster" />
        <img src={poster} alt="poster" />
        <img src={poster} alt="poster" />
      </article>
    </Container>
  );
};

export default Oscar;
