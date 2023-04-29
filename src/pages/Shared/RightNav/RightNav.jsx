import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaItunesNote,
  FaLinux,
  FaRavelry,
  FaSith,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import './RightNav.css'

const RightNav = () => {
  return (
    <div className="d-flex flex-column">
      <h4 className="mt-4">Login with</h4>
      <Button variant="outline-primary">
        <FaLinux />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>n
        <ListGroup>
          <ListGroup.Item>
            <FaItunesNote /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaRavelry /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaSith /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="right-navbg text-center">
        <h2>Create an Amazing Newspaper</h2>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default RightNav;
