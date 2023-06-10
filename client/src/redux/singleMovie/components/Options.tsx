import React from "react";
import { FiClock, FiEye, FiHeart } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";

import {
  Actions,
  OptionsHeader,
  Rating,
  Underline,
} from "../../../assets/style/SingleMovie.styled";

const Options = () => {
  return (
    <Actions>
      <OptionsHeader>
        <div>
          <FiEye />
          <p>Watch</p>
        </div>
        <div>
          <FiHeart />
          <p>Like</p>
        </div>
        <div>
          <FiClock />
          <p>Watchlist</p>
        </div>
      </OptionsHeader>
      <Underline margin={`1rem -5px 0.5rem`} />
      <p>Rate</p>
      <Rating>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
      </Rating>
      <Underline margin={`0.5rem 0`} />
    </Actions>
  );
};

export default Options;
