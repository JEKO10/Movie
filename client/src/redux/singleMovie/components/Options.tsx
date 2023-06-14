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
import Modals from "./Modals";

const Options = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [watchlist, setWatchlist] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [review, setReview] = useState(false);
  const [list, setList] = useState(false);
  const [share, setShare] = useState(false);

  return (
    <>
      <Actions>
        <OptionsHeader>
          <div onClick={() => setIsWatched(!isWatched)}>
            <FiEye color={isWatched ? "#0f87be" : ""} />
            <p>Watch</p>
          </div>
          <div onClick={() => setIsLike(!isLike)}>
            <FiHeart
              color={isLike ? "#ff9023" : ""}
              fill={isLike ? "#ff9023" : "none"}
            />
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
        <div onClick={() => setReview(!review)}>
          <p>Review or log</p>
        </div>
        <Underline margin={`0.5rem -5px`} />
        <div onClick={() => setList(!list)}>
          <p>Add to lists</p>
        </div>
        <Underline margin={`0.5rem -5px`} />
        <div onClick={() => setShare(!share)}>
          <p>Share</p>
        </div>
      </Actions>
      <Modals review={review} list={list} share={share} />
    </>
  );
};

export default Options;
