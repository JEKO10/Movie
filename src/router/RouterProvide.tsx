import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

function RouterProvider() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element: Component }) => (
          <Route path={path} element={<Component />} />
        ))}
        {/*<Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/films" element={<Films />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/singeMovie" element={<SingleMovie />} />
        <Route path="/*" element={<Error />} />*/}
      </Routes>
    </Router>
  );
}

export default RouterProvider;
