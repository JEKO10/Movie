import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../common/Header";
import ScrollToTop from "../common/ScrollTop";
import routes from "./routes";

function RouterProvider() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      {/* <main>
        <Routes>
          {routes.map(({ id, path, element: Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </main> */}
    </Router>
  );
}

export default RouterProvider;
