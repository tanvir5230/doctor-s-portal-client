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

const Home = () => {
  return (
    <>
      <Container fluid id="homepage" className="g-0 p-0">
        <MyNavbar />
        <GetAppointment />
        <Info />
      </Container>
      <Container style={{ marginTop: "150px" }}>
        <Service />
      </Container>
      <Container fluid>
        <About />
      </Container>
      <Container>
        <Testimonial />
        <Blog />
        <Doctors />
      </Container>
      <Container fluid className="contact pt-5" style={{ marginTop: "100px" }}>
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
