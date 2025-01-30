/* eslint-disable react/prop-types */
import { useContext, Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authStore } from "../../store/stores";
import ScreenLoader from "./../ui/ScreenLoader";
import Header from "../ui/Header";

export const LazyWithAuth = ({ Component, isPublic = false }) => {
  const { isAuth } = useContext(authStore);
  const location = useLocation();

  const publicRoutes = ["/register", "/"];

  if (isAuth && publicRoutes.includes(location.pathname)) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isAuth && !isPublic) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <div className="global--container">
        <Suspense fallback={<ScreenLoader />}>
          <Component />
        </Suspense>
      </div>
    </>
  );
};
