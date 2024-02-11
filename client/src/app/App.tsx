import React from "react";

import { GlobalStyles } from "../assets/style/GlobalStyles";
import RouterProvider from "../router/RouterProvide";
import Features from "./Features";
import FixedSidebar from "./FixedSidebar";
import Oscar from "./Oscar";
import RatePopUp from "./RatePopUp";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider />
      <FixedSidebar />
      <Features />
      <Oscar />
      <RatePopUp />
    </>
  );
}

export default App;
