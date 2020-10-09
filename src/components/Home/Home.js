import React from "react";
import { Container } from "reactstrap";
import MyNavbar from "./MyNavbar";

const Home = () => {
  return (
    <Container fluid id="homepage" className="g-0 p-0">
      <MyNavbar />
    </Container>
  );
};

export default Home;
