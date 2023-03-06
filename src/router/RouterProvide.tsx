import { HashRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "../features/navbar/Navbar";
import ScrollToTop from "../common/ScrollTop";

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
