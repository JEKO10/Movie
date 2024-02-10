import React from "react";

import dash from "../assets/images/icons/dash.svg";
import eye from "../assets/images/icons/eye.svg";
import heart from "../assets/images/icons/heart.svg";
import star from "../assets/images/icons/star.svg";
import { Features as Container } from "./Temp.style";

const Features = () => {
  return (
    <Container>
      <h2>Moviexd lets you…</h2>
      <article>
        <img src={eye} alt="eyeImg" />
        <p>
          Keep track of every film you ever watched (or just start from day you
          join)
        </p>
      </article>
      <article>
        <img src={heart} alt="heartImg" />
        <p>
          Show some love for your favorite films, list and reviews with a like
        </p>
      </article>
      <article>
        <img src={dash} alt="dashImg" />
        <p>Write and share a review with friends or other movie lovers</p>
      </article>
      <article>
        <img src={star} alt="starImg" />
        <p>
          Rate the movies on a scale of 1 to 5, take notes and share your
          opinion
        </p>
      </article>
    </Container>
  );
};

export default Features;
