import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

const Service = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    const loadedServices = [
      {
        image: "tooth1.png",
        heading: "Fluoride Treatment",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolore sit nulla, est esse vero?",
      },
      {
        image: "tooth2.png",
        heading: "Cavity Filling",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolore sit nulla, est esse vero?",
      },
      {
        image: "tooth3.png",
        heading: "Teeth Whitening",
        text:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolore sit nulla, est esse vero?",
      },
    ];
    setServices(loadedServices);
  }, []);
  return (
    <>
      <Row className="mt-5 justify-content-center text-center">
        <Col xs={12} className="text-center">
          <h1 className="t-green">our services</h1>
          <h1>services we provide</h1>
        </Col>
        {services &&
          services.map((service) => {
            return (
              <Col md={4} className="px-3 mt-5">
                <div>
                  <img
                    src={require(`../../resourses/doctors-portal/images/${service.image}`)}
                    alt=""
                    className="img-fluid"
                  />
                  <h4 className="py-3">{service.heading}</h4>
                  <p className="text-secondary">{service.text}</p>
                </div>
              </Col>
            );
          })}
      </Row>
      <Row className="mt-5 justify-content-center align-items-center">
        <Col md={5} className="py-5">
          <img
            src={require("../../resourses/doctors-portal/images/baby-tooth-test.png")}
            className="img-fluid rounded-lg"
            alt=""
          />
        </Col>
        <Col md={7} className="px-5 mt-5 mt-md-0">
          <h2 style={{ fontSize: "3rem" }}>
            Exceptional Dental <br /> Care, on Your Terms
          </h2>
          <p className="text-secondary py-3" style={{ fontSize: "1.2rem" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button
            className="btn c-green-grad-right font-weight-bold text-white"
            style={{ fontSize: "1.2rem" }}
          >
            learn more
          </button>
        </Col>
      </Row>
    </>
  );
};

export default Service;
