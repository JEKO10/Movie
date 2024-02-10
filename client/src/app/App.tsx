import React from "react";

import { GlobalStyles } from "../assets/style/GlobalStyles";
import RouterProvider from "../router/RouterProvide";
import Features from "./Features";
import FixedSidebar from "./FixedSidebar";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider />
      <FixedSidebar />
      <Features />
    </>
  );
}

export default App;
