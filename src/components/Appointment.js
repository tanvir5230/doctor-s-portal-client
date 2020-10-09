import React, { Component } from "react";
import Calendar from "react-calendar";

import { Col, Container, Row } from "reactstrap";

class Appointment extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => {
    if (new Date() > date) {
      alert("you can't select this date");
    } else {
      this.setState({ date });
    }
  };

  render() {
    return (
      <>
        <Container className="" style={{ height: "100vh" }}>
          <Row
            className="justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <Col
              xs={12}
              lg={6}
              className="d-flex justify-content-center align-self-end"
            >
              <div className="pr-md-5">
                <h2 className="mb-5 text-center">Appointment</h2>
                <Calendar
                  minDate={new Date()}
                  onChange={this.onChange}
                  value={this.state.date}
                  className="shadow-lg"
                />
              </div>
            </Col>
            <Col xs={12} md={6} className="d-none d-md-block">
              <img
                src={require("../resourses/doctors-portal/images/Mask Group 1.png")}
                alt="mask"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <h3 className="t-green text-center">
            Available Appointments on February 7, 2020
          </h3>
          <Booking />
        </Container>
      </>
    );
  }
}

const Booking = () => {
  return (
    <Row className="mt-5 justify-content-center">
      <Col xs={12} md={6} lg={3}>
        <div className="shadow py-4">
          <div className="m-auto text-center">
            <h4 className="t-green">Teeth Cleaning</h4>
            <h5>5:00 pm - 6:30 pm</h5>
            <p className="p-0 mb-1 text-black-50">10 spaces available</p>
            <button className="btn c-green-grad-right text-white font-weight-bold">
              Book Appointment
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Appointment;
