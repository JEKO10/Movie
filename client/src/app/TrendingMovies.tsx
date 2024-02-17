import React from "react";

import eyesWideShut from "../assets/images/eyesWide.png";
import forestGump from "../assets/images/forestGump.png";
import noCountry from "../assets/images/noCountry.png";
import { TrendingMovies as Container } from "./Temp.style";

const TrendingMovies = () => {
  return (
    <Container>
      <h2>Trending Movies</h2>
      <article>
        <div>
          <h3>1.</h3>
          <div>
            <h2>No country for old men</h2>
            <p>In the last month, this movie was searched 32,121 times!</p>
            <img src={noCountry} alt="noCountry" />
          </div>
          <button>Rate</button>
        </div>
        <div>
          <h3>2.</h3>
          <div>
            <h2>Eyes wide shut</h2>
            <p>In the last month, this movie was searched 18,010 times!</p>
            <img src={eyesWideShut} alt="eyesWideShut" />
          </div>
          <button>Rate</button>
        </div>
        <div>
          <h3>3.</h3>
          <div>
            <h2>Forest Gump</h2>
            <p>In the last month, this movie was searched 12,223 times!</p>
            <img src={forestGump} alt="forestGump" />
          </div>
          <button>Rate</button>
        </div>
      </article>
    </Container>
  );
};

export default TrendingMovies;
