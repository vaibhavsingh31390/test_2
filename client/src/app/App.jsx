import React, { Suspense, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunk } from "./store/thunk/fetchData";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Container from "./components/layout/Format/Container";
import Row from "./components/layout/Format/Row";
import ScreenLoader from "./components/common/Loaders/ScreenLoader";
import ServerError from "./components/pages/HTTP/ServerError";
import { setAppConfig } from "./store/slices/appSlice";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, appConfig } = useSelector((state) => state.app);
  const fetchConfig = useCallback(async () => {
    try {
      const res = await dispatch(fetchDataThunk({ uri: "config" })).unwrap();
      if (res) {
        dispatch(setAppConfig(res.data));
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!appConfig) {
      fetchConfig();
    }
  }, [appConfig, fetchConfig]);

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <ServerError msg={error} />;
  }

  return (
    <>
      <Suspense fallback={<ScreenLoader />}>
        <Header />
        <Container>
          <Row>
            <Outlet />
          </Row>
        </Container>
        <Footer />
      </Suspense>
    </>
  );
};

export default React.memo(App);
