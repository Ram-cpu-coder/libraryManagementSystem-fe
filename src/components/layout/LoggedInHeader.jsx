import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { logOutAction } from "../../features/users/userAction";

const LoggedInHeader = () => {
  return (
    <Navbar expand="lg" className="shadow text-dark">
      <Container>
        <Navbar.Brand href="/user" className="text-dark">
          LMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link navLink text-black px-4" to="/user">
              Home
            </Link>
            <Link className="nav-link navLink text-black px-4" to="/user">
              DashBoard
            </Link>
            <Link
              className="nav-link text-black navLink px-4"
              to="/"
              onClick={() => logOutAction()}
            >
              Log Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LoggedInHeader;
