import React from "react";
import { Container } from "reactstrap";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Doctors from "./Doctors";
import GetAppointment from "./GetAppointment";
import Info from "./Info";
import MyFooter from "./MyFooter";
import MyNavbar from "./MyNavbar";
import Service from "./Service";
import Testimonial from "./Testimonial";
import "./Home.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Appointment from "../appointment/Appointment";

const Home = () => {
  return (
    <>
      <MyNavbar />
      <Switch>
        <Route path="/dental-services">
          <Container style={{ marginTop: "20vh" }}>
            <Service />
          </Container>
        </Route>

        <Route path="/about">
          <Container fluid style={{ marginTop: "25vh" }}>
            <About />
          </Container>
        </Route>

        <Route path="/reviews">
          <Testimonial />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/doctors">
          <Doctors />
        </Route>

        <Route path="/contactus">
          <Container
            fluid
            className="contact pt-5"
            style={{ marginTop: "10vh" }}
          >
            <div className="text-center font-weight-bold text-white">
              <h4 className="t-green  text-uppercase">contact us</h4>
              <h2 className="text-capitalize">always connect with us</h2>
            </div>
            <Contact />
          </Container>
        </Route>

        <Route path="/appointment">
          <Appointment />
        </Route>

        <Route path="/">
          <Container fluid id="homepage" className="g-0 p-0">
            <GetAppointment />
            <Info />
          </Container>
        </Route>
      </Switch>
      <MyFooter />
    </>
  );
};

export default Home;
