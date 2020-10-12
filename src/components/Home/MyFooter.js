import React from "react";
import { Col, Container, Row } from "reactstrap";
import bg from "../../resourses/doctors-portal/images/footer-bg.png";

const MyFooter = () => {
  return (
    <>
      <footer
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center center",
          marginTop: "80px",
        }}
      >
        <Container className="h-100">
          <Row className="h-100 justify-content-center align-items-center pt-5 px-3">
            <Col xs={6} md={3} className="pt-5">
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
            </Col>
            <Col xs={6} md={3}>
              <h2 className="t-green">our services</h2>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
            </Col>
            <Col xs={6} md={3}>
              <h2 className="t-green">oral health</h2>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
            </Col>
            <Col xs={6} md={3}>
              <h2 className="t-green">our address</h2>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
              <a className="d-block text-black" href="/">
                emergency call
              </a>
            </Col>
          </Row>
          <Row>
            <div className="text-center py-5 col-12">
              © <span>{new Date().getFullYear()}</span> Copyright
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MyFooter;
