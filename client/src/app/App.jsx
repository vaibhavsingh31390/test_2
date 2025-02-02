import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Container from "./components/layout/Format/Container";
import Row from "./components/layout/Format/Row";
import ScreenLoader from "./components/common/Loaders/ScreenLoader";

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<ScreenLoader />}>
        <Container>
          <Row>
            <Outlet />
          </Row>
        </Container>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
