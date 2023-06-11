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
      <Rating>
        <p>Rate</p>
        <div>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
      </Rating>
      <Underline margin={`0.5rem -5px`} />
      <div>
        <p>Review or log</p>
      </div>
      <Underline margin={`0.5rem -5px`} />
      <div>
        <p>Add to lists</p>
      </div>
      <Underline margin={`0.5rem -5px`} />
      <div>
        <p>Share</p>
      </div>
    </Actions>
  );
};

export default Options;
