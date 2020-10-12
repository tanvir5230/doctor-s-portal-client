import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="w-100 p-0"
      style={{
        zIndex: "1",
        height: "10vh",
        width: "100%",
        position: "fixed",
        top: "0",
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

      <NavbarToggler onClick={toggle} />
      <Collapse
        isOpen={isOpen}
        navbar
        className="d-lg-flex justify-content-lg-end pr-lg-5"
      >
        <Nav navbar>
          <NavItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              className="nav-link"
              activeStyle={{ color: "#19d3ae" }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/dental-services"
              className="nav-link"
              activeStyle={{ color: "#19d3ae" }}
            >
              Dental Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/reviews"
              className="text-dark-50 nav-link"
              activeStyle={{ color: "#19d3ae" }}
            >
              Reviews
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/doctors"
              className="text-dark-50 nav-link"
              activeStyle={{ color: "#19d3ae" }}
            >
              Doctors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/blog"
              className="text-dark-50 nav-link"
              activeStyle={{ color: "#19d3ae" }}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contactus"
              className="text-dark-50 nav-link"
              activeStyle={{ color: "#19d3ae" }}
            >
              Contact us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/dashboard"
              className="text-dark-50 nav-link"
              activeStyle={{ color: "#19d3ae" }}
            >
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
