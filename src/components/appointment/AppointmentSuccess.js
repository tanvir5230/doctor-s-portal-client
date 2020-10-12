import React from "react";
import { Col, Container, Row } from "reactstrap";

const AppointmentSuccess = () => {
  return (
    <Container style={{ height: "400px" }}>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs="12" className="h-100">
          <div className="w-100 h-100 text-center d-flex align-items-center justify-content-center">
            <div>
              <span className="fa fa-check-circle-o fa-2x text-success mr-3"></span>
              <span
                className="text-success font-weight-bold"
                style={{ fontSize: "1.5rem" }}
              >
                your appointment is successful.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentSuccess;
