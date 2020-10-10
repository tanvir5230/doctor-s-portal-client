import React from "react";
import { Col, Row } from "reactstrap";

const GetAppointment = () => {
  return (
    <Row
      className="d-flex justify-content-center align-items-center w-100"
      style={{ height: "85vh", zIndex: "10" }}
    >
      <Col md={4} className="offset-md-1 offset-2 px-3">
        <h2 style={{ fontSize: "3rem" }}>
          Your new smile <br /> starts here
        </h2>
        <p className="text-secondary py-2" style={{ fontSize: "1.1rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat
          repellat, cupiditate perferendis aperiam beatae!
        </p>
        <button className="btn c-green-grad-right text-white font-weight-bold">
          get appointment
        </button>
      </Col>

      <Col md={5} className="offset-md-1 d-none d-md-block">
        <img
          src={require("../../resourses/doctors-portal/images/chair.png")}
          alt=""
          className="img-fluid"
        />
      </Col>
    </Row>
  );
};

export default GetAppointment;
