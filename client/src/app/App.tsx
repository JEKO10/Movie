import React from "react";

import { GlobalStyles } from "../assets/style/GlobalStyles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Friends from "./Friends";
// import RouterProvider from "../router/RouterProvide";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <RouterProvider /> */}
      <Navbar />
      <Sidebar />
      <Friends />
    </>
  );
}

export default App;
