import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="w-100 mr-1 bg-transparent"
      style={{ zIndex: "1" }}
      color="light"
      light
      expand="md"
    >
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto p-0" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Dental Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Reviews</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Contact us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
