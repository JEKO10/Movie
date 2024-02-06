import React from "react";

import { GlobalStyles } from "../assets/style/GlobalStyles";
import Navbar from "./Navbar";
import FixedSidebar from "./FixedSidebar";
// import RouterProvider from "../router/RouterProvide";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <RouterProvider /> */}
      <Navbar />
      <FixedSidebar />
    </>
  );
}

export default App;
