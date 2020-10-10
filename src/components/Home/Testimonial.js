import React from "react";
import { Col, Row } from "reactstrap";
import p1 from "../../resourses/doctors-portal/images/pat-1.png";
import p2 from "../../resourses/doctors-portal/images/pat-2.png";
import p3 from "../../resourses/doctors-portal/images/pat-3.png";

const testimonialData = [
  {
    name: "tanvir",
    place: "cumilla",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique ab eaque, itaque at aliquam ullam esse fuga veritatis nam!",
    image: p1,
  },
  {
    name: "jannat",
    place: "cumilla",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique ab eaque, itaque at aliquam ullam esse fuga veritatis nam!",
    image: p2,
  },
  {
    name: "jannatul",
    place: "cumilla",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique ab eaque, itaque at aliquam ullam esse fuga veritatis nam!",
    image: p3,
  },
];

const Testimonial = () => {
  return (
    <>
      <Row className="align-items-center" style={{ marginTop: "100px" }}>
        <Col xs={12} md={8} className="order-md-0 order-1 mt-4 mt-md-0">
          <h4 className="text-uppercase font-weight-bold t-green">
            Testimonial
          </h4>
          <h2 className="text-capitalize font-weight-bold">
            what our patient <br /> say
          </h2>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center justify-content-md-end order-md-1 order-0"
        >
          <img
            src={require("../../resourses/doctors-portal/images/quote.png")}
            alt=""
            className=""
            height="130"
          />
        </Col>
      </Row>
      <Row>
        {testimonialData.map((data) => {
          return (
            <Col key={data.image} md={4} className="p-4 mt-4">
              <div className="border p-4">
                <p>{data.comment}</p>
                <div className="d-flex justify-content-center justify-content-md-start my-3">
                  <img
                    src={data.image}
                    className="rounded-circle"
                    alt=""
                    width="50"
                    height="50"
                  />
                  <div className="ml-3">
                    <h4 className="t-green m-0">{data.name}</h4>
                    <p className="text-secondary m-0">{data.place}</p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Testimonial;
