import React from "react";

import { GlobalStyles } from "../assets/style/GlobalStyles";
import Profile from "../redux/profile/Profile";
import RouterProvider from "../router/RouterProvide";
import Features from "./Features";
import FixedSidebar from "./FixedSidebar";
import Oscar from "./Oscar";
import TrendingMovies from "./TrendingMovies";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider />
      <FixedSidebar />
      <Profile />
      <TrendingMovies />
      <Features />
      <Oscar />
    </>
  );
}

export default App;
