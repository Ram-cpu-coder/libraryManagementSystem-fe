import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="shadow text-dark">
      <Container>
        <Navbar.Brand href="/" className="text-dark">
          LMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link navLink text-black" to="/">
              Home
            </Link>
            <Link className="nav-link navLink text-black" to="/signup">
              Sign Up
            </Link>
            <Link className="nav-link text-black navLink" to="/signin">
              Login
            </Link>
            <Link className="nav-link text-black navLink" to="/books">
              Books
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
