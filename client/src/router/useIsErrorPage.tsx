import { useLocation } from "react-router-dom";

import routes from "./routes";

export const useIsErrorPage = (): boolean => {
  const location = useLocation();
  return routes.some((route) => location.pathname.includes(route.path));
};
