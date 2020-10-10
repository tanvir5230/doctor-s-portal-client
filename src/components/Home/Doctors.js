import React from "react";
import { Card, CardImg, Col, Row } from "reactstrap";
import doctor from "../../resourses/doctors-portal/images/doctor.png";

const doctors = [
  { id: 1, name: "tanvir", image: doctor, phone: +88011111111 },
  { id: 1, name: "tanvir", image: doctor, phone: +88011111111 },
  { id: 1, name: "tanvir", image: doctor, phone: +88011111111 },
];

const Doctors = () => {
  return (
    <>
      <h2
        style={{ marginTop: "100px" }}
        className="text-uppercase text-center t-green mb-4"
      >
        our doctors
      </h2>
      <Row>
        {doctors.map((doc) => {
          return (
            <Col md={4}>
              <div>
                <Card className="border-0 text-center">
                  <CardImg top src={doc.image}></CardImg>
                  <div
                    className="bg-white py-2"
                    style={{ transform: "translate(0,-80px)" }}
                  >
                    <h4>Dr. {doc.name}</h4>
                    <h6 className="mt-3">
                      <span className="text-success"><i className="fa fa-phone"></i></span>
                      <span className="ml-2">+{doc.phone}</span>
                    </h6>
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Doctors;
