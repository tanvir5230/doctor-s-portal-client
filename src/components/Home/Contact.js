import React from "react";
import { Col, Row } from "reactstrap";

const Contact = () => {
  return (
    <Row className=" justify-content-center">
      <Col xs={11} md={8}>
        <form className="" action="/">
          <input
            type="email"
            className="form-control mt-3 px-3 py-4"
            placeholder="Your Email *"
          />
          <input
            type="text"
            className="form-control mt-3 px-3 py-4"
            placeholder="Subject *"
          />
          <textarea
            className="form-control mt-3 px-3 py-4"
            name=""
            id=""
            rows="5"
            placeholder="Your Message *"
          ></textarea>
          <div className="d-flex justify-content-center">
            <button className="btn font-weight-bold c-green-grad-right my-3 px-5 text-white">
              submit
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default Contact;
