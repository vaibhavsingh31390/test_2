/* eslint-disable react/prop-types */
import { Suspense, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ScreenLoader from './../ui/ScreenLoader';
import Header from '../ui/Header';

export const LazyWithAuth = ({ Component, isPublic = false }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const publicRoutes = ['/register', '/'];

  const handleFadeOutComplete = () => {
    setIsLoading(false);
  };

  if (isAuth && publicRoutes.includes(location.pathname)) {
    return <Navigate to="/pools" replace />;
  }

  if (!isAuth && !isPublic) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      {isLoading && <ScreenLoader onFadeOutComplete={handleFadeOutComplete} />}
      <Suspense fallback={null}>
        <div className="global--container">
          <Component />
        </div>
      </Suspense>
    </>
  );
};
