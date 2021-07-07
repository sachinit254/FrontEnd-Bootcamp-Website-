import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavbarComp = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="md" className="py-3" fixed="top">
      <Container>
        <Navbar.Brand href="#Home">Frontend Bootcamp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink to="/" className="text-decoration-none text-white">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/learn" className="text-decoration-none text-white">
                What You'll Learn
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/questions"
                className="text-decoration-none text-white"
              >
                Questions
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/instructors"
                className="text-decoration-none text-white"
              >
                Instructors
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
