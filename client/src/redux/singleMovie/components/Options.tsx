import React, { useState } from "react";
import { FiClock, FiEye, FiHeart } from "react-icons/fi";

import { useAppDispatch } from "../../../common/hooks";
import StarRating from "../../../common/StarRating";
import {
  Actions,
  AddWatchlist,
  OptionsHeader,
  RemoveWatchlist,
  Underline
} from "../SingleMovie.styled";
import { toggleList, toggleReview, toggleShare } from "../singleMovieSlice";
import Modals from "./Modals";

const Options = () => {
  const [watchlist, setWatchlist] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const dispatch = useAppDispatch();

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
        <Underline margin={`1rem -5px 0.5rem`} width="calc(100% + 10px)" />
        <StarRating />
        <Underline margin={`0.5rem -5px`} width="calc(100% + 10px)" />
        <div onClick={() => dispatch(toggleReview(true))}>
          <p>Review or log</p>
        </div>
        <Underline margin={`0.5rem -5px`} width="calc(100% + 10px)" />
        <div onClick={() => dispatch(toggleList(true))}>
          <p>Add to lists</p>
        </div>
        <Underline margin={`0.5rem -5px`} width="calc(100% + 10px)" />
        <div onClick={() => dispatch(toggleShare(true))}>
          <p>Share</p>
        </div>
      </Actions>
      <Modals />
    </>
  );
};

export default Options;
