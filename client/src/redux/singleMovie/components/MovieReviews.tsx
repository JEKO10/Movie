import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Review } from "../../../assets/style/SingleMovie.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { Loader, LoaderWrapper } from "../../../common/Loader";
import { getReviews } from "../../reviews/reviewsSlice";

const MovieReviews = () => {
  const { id } = useParams();
  const { reviews, isLoading } = useAppSelector((store) => store.reviews);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    dispatch(getReviews(id));
  }, []);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <section>
      {reviews.map((review) => {
        const { avatar_path, rating, username } = review.author_details;

        return (
          <Review key={review.id}>
            <div>
              <img
                src={
                  avatar_path?.startsWith("/http")
                    ? avatar_path.slice(1)
                    : avatar_path === null
                    ? import.meta.env.VITE_IMG
                    : posterUrl + avatar_path
                }
                alt="Profile"
              />
              <h2>{username}</h2>
            </div>
            <h4>Created at: {review.created_at.slice(0, 10)}</h4>
            <p>{review.content}</p>
            {rating && <p>Rating: {rating}</p>}
          </Review>
        );
      })}
    </section>
  );
};

export default MovieReviews;
