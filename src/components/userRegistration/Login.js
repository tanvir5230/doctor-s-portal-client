import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { userContext } from "../../App";
import "./reg.css";

const Login = () => {
  const { user, toggleUser } = useContext(userContext);
  const history = useHistory();
  const { from } = history.location.state;
  const handleLogin = () => {
    toggleUser();
    history.replace(from);
  };

  if (user) {
    history.replace("/dashboard");
  }
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="h-100 w-100">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <form className="w-75" id="login">
            <h3 className="mb-5 text-center text-black-50">Login</h3>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="form-control border-bottom my-4"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="form-control border-bottom my-4"
            />
            <p className="text-danger">forgot password?</p>
            <button
              className="btn c-green-grad-right text-white btn-block mt-5"
              onClick={handleLogin}
            >
              login
            </button>
          </form>
        </Col>
        <Col md={6} className="d-none d-md-block">
          <img
            src={require("../../resourses/doctors-portal/images/bg-login.png")}
            alt=""
            height="650px"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
