import React from "react";

import { GlobalStyles } from "../assets/style/GlobalStyles";
import RouterProvider from "../router/RouterProvide";
import FixedSidebar from "./FixedSidebar";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider />
      <FixedSidebar />
    </>
  );
}

export default App;
