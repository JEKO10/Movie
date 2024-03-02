import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdList } from "react-icons/io";
import { IoEye, IoStar } from "react-icons/io5";

import RatePopUp from "./RatePopUp";
import { Features as Container } from "./Temp.style";

const Features = () => {
  return (
    <Container>
      <article>
        <h2>Moviexd lets you…</h2>
        <div>
          <IoEye />
          <p>
            Keep track of every film you ever watched (or just start from day
            you join)
          </p>
        </div>
        <div>
          <FaRegHeart />
          <p>
            Show some love for your favorite films, list and reviews with a like
          </p>
        </div>
        <div>
          <IoMdList />
          <p>Write and share a review with friends or other movie lovers</p>
        </div>
        <div>
          <IoStar />
          <p>
            Rate the movies on a scale of 1 to 5, take notes and share your
            opinion
          </p>
        </div>
      </article>
      <RatePopUp />
    </Container>
  );
};

export default Features;
