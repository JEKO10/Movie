import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

function RouterProvider() {
  return (
    <Router>
      <Routes>
        {routes.map(({ id, path, element: Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default RouterProvider;
