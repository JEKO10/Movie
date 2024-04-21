import React from "react";

import newsImg from "../../assets/images/news.jpg";
import { News as Container } from "./Home.style";

const News = () => {
  return (
    <Container>
      <h2>Latest News</h2>
      <article>
        <img src={newsImg} alt="NewsImg" />
        <div>
          <h3>Femme Fatale Fantasy</h3>
          <p>
            To celebrate 100 years of Columbia Pictures, we’re examining the
            deep impact of the 1946 film noir Gilda and its sparkling star Rita
            Hayworth, from Shawshank to the Moulin Rouge.
          </p>
          <button>Read More</button>
        </div>
      </article>
    </Container>
  );
};

export default News;
