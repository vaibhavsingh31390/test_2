import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { authRoutes } from "./app/routes/authRoutes";
import { poolRoutes } from "./app/routes/poolRoutes";
import NotFound from "./app/pages/status_codes/NotFound";
import "./assets/style.css";
function App() {
  const routes = [
    ...authRoutes,
    ...poolRoutes,
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
