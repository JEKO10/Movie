import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { getMovie } from "./singleMovieSlice";

const SingleMovie = () => {
  const { movieInfo } = useAppSelector((store) => store.singleMovie);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
    console.log(movieInfo);
  }, []);

  return <section>SingleMovie</section>;
};

export default SingleMovie;
