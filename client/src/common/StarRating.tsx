import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";

import { Rating } from "../redux/singleMovie/SingleMovie.styled";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
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
                onClick={() => {
                  setRating(ratingValue);
                }}
              />
              <RiStarSFill
                color={ratingValue <= (hover || rating) ? "#00AF51" : "#334455"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
    </Rating>
  );
};

export default StarRating;
