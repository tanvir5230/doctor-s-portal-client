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
      style={{ zIndex: "1", height: "10vh", width: "100%" }}
      color="light"
      light
      expand="lg"
    >
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto p-0 d-flex justify-content-md-end w-100" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
          <NavItem className="">
            <NavLink href="/">Dental Services</NavLink>
          </NavItem>
          <NavItem className="pl-md-3">
            <NavLink href="/" className="text-white">
              Reviews
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="text-white">
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="text-white">
              Contact us
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
