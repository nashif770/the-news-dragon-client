import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvide";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee className="text-danger" speed={50}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo odit,
          id quododio corporis architecto ducimus eligendi, dolorem placeat eum
          porro, voluptatibus cumque! Illo, minima corrupti sed vero a sequi.0
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
