import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const path = history.location.pathname;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="w-100 p-0"
      style={{
        height: "10vh",
        width: "100%",
      }}
      color="light"
      light
      expand="lg"
    >
      <Link to="/" className="pl-lg-5">
        <span
          className="font-weight-bolder text-black-50"
          style={{ fontSize: "2rem" }}
        >
          doctors{" "}
        </span>
        <span
          className="t-green font-weight-bolder"
          style={{ fontSize: "2rem" }}
        >
          portal
        </span>
      </Link>

      {path === "/" && (
        <>
          <NavbarToggler onClick={toggle} />
          <Collapse
            isOpen={isOpen}
            navbar
            className="d-lg-flex justify-content-lg-end pr-lg-5"
          >
            <Nav className="text-right" navbar>
              <NavItem>
                <NavLink href="#" className="nav-link">
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#dental-services"
                  className="nav-link"
                  activeStyle={{ color: "#19d3ae" }}
                >
                  Dental Services
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#about"
                  className="nav-link"
                  activeStyle={{ color: "#19d3ae" }}
                >
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#reviews"
                  className="text-dark-50 nav-link"
                  activeStyle={{ color: "#19d3ae" }}
                >
                  Reviews
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#blog"
                  className="text-dark-50 nav-link"
                  activeStyle={{ color: "#19d3ae" }}
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#doctors"
                  className="text-dark-50 nav-link"
                  activeStyle={{ color: "#19d3ae" }}
                >
                  Doctors
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#contactus"
                  className="text-dark-50 nav-link"
                  activeStyle={{ color: "#19d3ae" }}
                >
                  Contact us
                </NavLink>
              </NavItem>
              <NavItem>
                <Link
                  to="/doctor's-panel"
                  className="text-dark-50 nav-link"
                  activeStyle={{ color: "#19d3ae" }}
                >
                  Dashboard
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </>
      )}
    </Navbar>
  );
};

export default MyNavbar;
