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
                    className="bg-white"
                    style={{ transform: "translate(0,-50px)" }}
                  >
                    <h4>Dr. {doc.name}</h4>
                    <h6>
                      <img
                        src={require("../../resourses/doctors-portal/images/call.png")}
                        width="20"
                        height="20"
                        className=" bg-secondary"
                        alt=""
                      />
                      <span>{doc.phone}</span>
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
