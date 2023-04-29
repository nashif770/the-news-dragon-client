import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvide";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut =()=>{
    console.log('logged out clicked')
    logOut()
    .then()
    .catch(error => console.log(error))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="text-decoration-none m-3 text-black" to="/">Home</Link>
            <Link className="text-decoration-none m-3 text-black" to="/">About</Link>
            <Link className="text-decoration-none m-3 text-black" to="/">Career</Link>
          </Nav>
          <Nav>
            {user ? (
              <div>
                <span>{user.email}</span>
                <Link>
                  <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
