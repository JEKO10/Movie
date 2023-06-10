import React from "react";
import { FiClock, FiEye, FiHeart } from "react-icons/fi";

import {
  Actions,
  OptionsHeader,
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
    </Actions>
  );
};

export default Options;
