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
          height: "400px",
        }}
      >
        <Container className="h-100">
          <Row className="h-100 justify-content-center align-items-center">
            <Col xs={6} md={3}>
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
            <div class="text-center py-3 col-12">
              © <span>{new Date().getFullYear()}</span> Copyright
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MyFooter;
