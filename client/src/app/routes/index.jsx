import { createBrowserRouter, useLocation } from "react-router-dom";
import App from "../App";
import NotFound from "../components/pages/HTTP/NotFound";
import { poolRoutes } from "./poolRoutes";
import { authRoutes } from "./authRoutes";
import ProtectedRoute from "../components/common/HOC/ProtectedRoute";

const NotFoundWithLocation = () => {
  const location = useLocation();
  return <NotFound location={location.pathname} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...poolRoutes.map((route) => ({
        path: route.path,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
      })),
      ...authRoutes.map((route) => ({
        path: route.path,
        element: route.element,
      })),
      {
        path: "*",
        element: <NotFoundWithLocation />,
      },
    ],
  },
]);

export default router;
