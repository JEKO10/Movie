import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { useAppSelector } from "../common/hooks";
import ScrollToTop from "../common/ScrollTop";
import SearchModal from "../redux/navbar/components/SearchModal";
import Navbar from "../redux/navbar/Navbar";
import routes from "./routes";

function RouterProvider() {
  const { isSearchOpen, inputValue } = useAppSelector((state) => state.navbar);

  return (
    <Router>
      <Navbar />
      {isSearchOpen && inputValue && <SearchModal />}
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
