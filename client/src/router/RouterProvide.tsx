import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Modals from "../common/modals/Modals";
import ScrollToTop from "../common/ScrollTop";
import routes from "./routes";

function RouterProvider() {
  return (
    <Router>
      <Modals />
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
