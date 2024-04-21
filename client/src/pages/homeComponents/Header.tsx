import React from "react";

import poster from "../../assets/images/poster.png";
import { Header as Container } from "./Home.style";

const Header = () => {
  return (
    <Container>
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
