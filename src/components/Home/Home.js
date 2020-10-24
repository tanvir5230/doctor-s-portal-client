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

const Home = () => {
  return (
    <>
      <MyNavbar />
      <Container fluid id="homepage" className="g-0 p-0">
        <GetAppointment />
        <Info />
      </Container>
      <Container id="dental-services" style={{ marginTop: "20vh" }}>
        <Service />
      </Container>

      <Container id="about" fluid style={{ marginTop: "25vh" }}>
        <About />
      </Container>

      <Testimonial />

      <Blog />

      <Doctors />

      <Container
        id="contactus"
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

      <MyFooter />
    </>
  );
};

export default Home;
