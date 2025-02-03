import React from "react";
import "./ServerError.css";
import Container from "../../layout/Format/Container";
import Row from "../../layout/Format/Row";
import Col from "../../layout/Format/Col";

const ServerError = ({ msg }) => {
  return (
    <Container className="error-page">
      <Row>
        <Col md={12}>
          <h1 className="error-page-h1">Error : {msg}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ServerError;
