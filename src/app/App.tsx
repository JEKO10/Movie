import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getMovies } from "./features/moviesSlice";
import { useAppDispatch } from "./common/hooks";
import RouterProvider from "../router/RouterProvide";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <RouterProvider />
      </main>
    </>
  );
}

export default App;
