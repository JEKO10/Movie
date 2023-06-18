import React, { useEffect } from "react";

import { useAppDispatch } from "../../../common/hooks";
import { getReviews } from "../../reviews/reviewsSlice";

const MovieReviews = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReviews(238));
  }, []);

  return <section>MovieReviews</section>;
};

export default MovieReviews;
