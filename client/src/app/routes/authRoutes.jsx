import { lazy } from "react";

const Login = lazy(() => import("../components/pages/Auth/Login"));
const Register = lazy(() => import("../components/pages/Auth/Register"));

export const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
