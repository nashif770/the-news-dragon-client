import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";

const NewsLayout = () => {
    return (
        <div>
      <Header></Header>

      <Container>
      <Row>
        <Col log={9}>
            <Outlet></Outlet>
        </Col>
        <Col log={3}>
            <RightNav></RightNav>
        </Col>
      </Row>
    </Container>

      <Footer></Footer>
    </div>
    );
};

export default NewsLayout;