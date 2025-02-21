import React from "react";
import "./NotFound.css";
import Container from "../../layout/Format/Container";
import Row from "../../layout/Format/Row";
import Col from "../../layout/Format/Col";

const NotFound = ({ msg }) => {
  return (
    <Container className="error-page">
      <Row>
        <Col md={12}>
          <h1 className="error-page-h1">
            404 not found <sup>"{location.pathname}"</sup>
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
