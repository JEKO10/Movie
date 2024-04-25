import React from "react";
import { IoStar } from "react-icons/io5";

import poster from "../../assets/images/poster.png";
import { Header as Container, HeaderSlide } from "./Home.style";

const Header = () => {
  return (
    <Container>
      <article>
        <h3>Inglourious basterds </h3>
        <p>
          In Nazi-occupied France during World War II, a plan to assassinate
          Nazi leaders by a group of Jewish U.S. soldiers coincides with a
          theatre owner&apos;s vengeful plans for the same.
        </p>
        <h4>2h 33min</h4>
        <button>Rate</button>
        <HeaderSlide />
        <HeaderSlide />
        <HeaderSlide />
        <HeaderSlide />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <p>4.2/5</p>
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
