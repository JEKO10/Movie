import React, { useState } from "react";
import { FiClock, FiEye, FiHeart, FiX } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";

import {
  Actions,
  AddWatchlist,
  OptionsHeader,
  Rating,
  RemoveWatchlist,
  Underline,
} from "../../../assets/style/SingleMovie.styled";

const Options = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [watchlist, setWatchlist] = useState(false);

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
        <div onClick={() => setWatchlist(!watchlist)}>
          <FiClock />
          {watchlist ? <RemoveWatchlist /> : <AddWatchlist />}
          <p> {watchlist ? "Remove" : "Watchlist"}</p>
        </div>
      </OptionsHeader>
      <Underline margin={`1rem -5px 0.5rem`} />
      <Rating>
        <p>Rate</p>
        <div>
          {rating ? <FiX onClick={() => setRating(0)} /> : ""}
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <RiStarSFill
                  color={
                    ratingValue <= (hover || rating) ? "#0f87be" : "#334455"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
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
