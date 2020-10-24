import React from "react";
import { useContext } from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Col, Container, Nav, Row } from "reactstrap";
import { userContext } from "../../App";
import Appointment from "./Appointments";
import Dashboard from "./Dashboard";
import "./dashboard.css";
import Patients from "./Patients";
import Prescriptions from "./Prescriptions";
import Settings from "./Settings";

const DoctorDashboard = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();

  const { toggleUser } = useContext(userContext);

  const handleSignout = () => {
    toggleUser();
    history.replace("/");
  };
  return (
    <Container fluid id="dashboard">
      <Row style={{ height: "100vh" }}>
        {/* sidebar */}
        <Sidebar url={url} handleSignout={handleSignout} />

        {/* main view */}
        <Col
          xs={10}
          md={9}
          lg={10}
          style={{
            backgroundColor: "#F4FDFB",
            width: "auto",
            overflowX: "hidden",
          }}
        >
          <Container fluid className="px-1 px-md-3 ">
            <h3 className="font-weight-bold py-2">
              {history.location.pathname.split("/")[2]}
            </h3>
            <Row>
              <Col xs={12}>
                <Switch>
                  <Route path={path + "/dashboard"}>
                    <Dashboard />
                  </Route>
                  <Route path={path + "/appointments"}>
                    <Appointment />
                  </Route>
                  <Route path={path + "/patients"}>
                    <Patients />
                  </Route>
                  <Route path={path + "/prescriptions"}>
                    <Prescriptions />
                  </Route>
                  <Route path={path + "/settings"}>
                    <Settings />
                  </Route>
                  <Redirect to={path + "/dashboard"} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const Sidebar = ({ url, handleSignout }) => {
  return (
    <Col xs={2} md={3} lg={2} className="c-green-grad-bottom px-0 pt-5">
      <Nav vertical className="w-100 h-100 align-items-center">
        <NavLink
          to={url + "/dashboard"}
          className="w-50 d-flex justify-content-start align-items-center text-white mt-4"
        >
          <span className="fa fa-diamond mr-md-2"></span>
          <span className="d-none d-md-inline">Dashboard</span>
        </NavLink>

        <NavLink
          to={url + "/appointments"}
          className="w-50 d-flex justify-content-start align-items-center text-white mt-4"
        >
          <span className="fa fa-calendar mr-md-2"></span>
          <span className="d-none d-md-inline">Appointments</span>
        </NavLink>

        <NavLink
          to={url + "/patients"}
          className="w-50 d-flex justify-content-start align-items-center   text-white mt-4"
        >
          <span className="fa fa-users mr-md-2"></span>
          <span className="d-none d-md-inline">Patients</span>
        </NavLink>

        <NavLink
          to={url + "/prescriptions"}
          className="w-50 d-flex justify-content-start align-items-center   text-white mt-4"
        >
          <span className="fa fa-book mr-md-2"></span>
          <span className="d-none d-md-inline">Prescriptions</span>
        </NavLink>
        <NavLink
          to={url + "/settings"}
          className="w-50 d-flex justify-content-start align-items-center   text-white mt-4"
        >
          <span className="fa fa-cog mr-md-2"></span>
          <span className="d-none d-md-inline">settings</span>
        </NavLink>

        <button
          className="btn w-50 d-flex justify-content-start align-items-center
              text-white mt-4 p-0 py-2"
          style={{ position: "absolute", bottom: "100px" }}
          onClick={handleSignout}
        >
          <span className="fa fa-sign-out mr-md-2"></span>
          <span className="d-none d-md-inline">Logout</span>
        </button>
      </Nav>
    </Col>
  );
};

export default DoctorDashboard;
