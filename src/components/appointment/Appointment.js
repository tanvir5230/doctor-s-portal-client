import React, { Component } from "react";
import Calendar from "react-calendar";

import { Col, Container, Row } from "reactstrap";
import MyNavbar from "../Home/MyNavbar";
import AppointmentForm from "./AppointmentForm";

class Appointment extends Component {
  state = {
    date: new Date(),
    modal: false,
    title: "",
  };

  toggle = (e) => {
    this.setState({
      modal: !this.state.modal,
      title: e.target.parentNode.firstElementChild.innerText,
    });
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
        <Container fluid id="appointment" className="g-0 p-0">
          <MyNavbar />
          <Container className="py-5">
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
                    value={this.state.date}
                    onChange={this.onChange}
                    className="shadow-lg"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} className="d-none d-md-block">
                <img
                  src={require("../../resourses/doctors-portal/images/chair.png")}
                  alt="mask"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container>
          <h3 className="mt-5 t-green text-center">
            Available Appointments on {this.state.date.toDateString()}
          </h3>
          <Booking toggleModal={this.toggle} />
          <AppointmentForm
            toggle={this.toggle}
            modal={this.state.modal}
            title={this.state.title}
          />
        </Container>
      </>
    );
  }
}

const Booking = ({ toggleModal }) => {
  return (
    <Row className="my-4 justify-content-center">
      <Col xs={12} md={6} lg={3}>
        <div className="shadow py-4">
          <div className="m-auto text-center">
            <h4 className="t-green">Teeth Cleaning</h4>
            <h5>5:00 pm - 6:30 pm</h5>
            <p className="p-0 mb-1 text-black-50 text-center">
              10 spaces available
            </p>
            <button
              onClick={toggleModal}
              className="btn c-green-grad-right text-white font-weight-bold"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Appointment;
