import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// Components
import Header from "../components/Header";

const RootLayOut = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}></Col>
          <Outlet />
        </Row>
      </Container>
    </>
  );
};

export default RootLayOut;
