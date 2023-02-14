import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getMovies } from "./features/moviesSlice";
import { useAppSelector, useAppDispatch } from "./common/hooks";

function App() {
  const dispatch = useAppDispatch();

  const { allMovies } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [allMovies]);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
