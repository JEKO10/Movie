import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "../common/ScrollTop";
import Navbar from "../features/navbar/Navbar";
import routes from "./routes";

function RouterProvider() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          {routes.map(({ id, path, element: Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </Router>
  );
}

export default RouterProvider;
