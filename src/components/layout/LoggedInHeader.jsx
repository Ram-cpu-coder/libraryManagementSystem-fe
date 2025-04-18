import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { logOutAction } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";

const LoggedInHeader = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  return (
    <Navbar expand="lg" className="shadow text-dark">
      <Container>
        <Navbar.Brand href="/" className="text-dark">
          LMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link navLink text-black px-4" to="/books">
              Home
            </Link>
            <Link
              className="nav-link navLink text-black px-4"
              to={user.role === "admin" ? "/admin" : "/my-books"}
            >
              DashBoard
            </Link>
            <Link
              className="nav-link text-black navLink px-4"
              to="/"
              onClick={() => dispatch(logOutAction())}
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
