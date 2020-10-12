import React from "react";
import { Row, Col } from "reactstrap";
import background from "../../resourses/doctors-portal/images/chair2.png";

const About = () => {
  return (
    <Row
      className="justify-content-center align-items-center"
      style={{
        height: "380px",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        marginTop: "100px",
      }}
      id="about"
    >
      <Col
        lg={5}
        className="p-0 d-none d-lg-flex justify-content-end"
        style={{ height: "100%", backgroundColor: "rgba(58, 66, 86, .95)" }}
      >
        <img
          src={require("../../resourses/doctors-portal/images/doctor.png")}
          alt=""
          width="500px"
          height="500px"
          style={{ transform: "translate(0px,-120px)" }}
        />
      </Col>

      <Col
        lg={7}
        className="text-white d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "rgba(58, 66, 86, .95)", height: "100%" }}
      >
        <div className="d-flex flex-column justify-content-center px-sm-5">
          <h4 className="text-uppercase">appointment</h4>
          <h2 className="my-2" style={{ fontSize: "2.3rem" }}>
            Make an appointment today
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            It is a long established fact that a reader will be distractedby the
            readable content of a page when looking at its
          </p>
          <div>
            <button
              className="btn c-green-grad-right font-weight-bold text-white"
              style={{ fontSize: "1.2rem" }}
            >
              learn more
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default About;
