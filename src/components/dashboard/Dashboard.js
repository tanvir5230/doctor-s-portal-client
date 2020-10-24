import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Table } from "reactstrap";
import Loader from "../Loader";
import ModalforPres from "./ModalforPres";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    Axios.get("http://localhost:5000/dashboard").then((res) =>
      setDashboardData(res.data)
    );
  }, []);

  return (
    <>
      <Row
        className="flex-nowrap p-0"
        style={{
          boxSizing: "border-box",
          overflowX: "scroll",
        }}
      >
        <Col xs={4} md={3} className="text-white px-1">
          <div
            className="rounded-lg py-md-3"
            style={{ backgroundColor: "#f15263" }}
          >
            <Row className="justify-content-center align-items-center p-0">
              <Col xs={12} lg={5} className="h-100 w-100 text-center">
                <span className="font-weight-bold" style={{ fontSize: "3rem" }}>
                  04
                </span>
              </Col>
              <Col
                xs={12}
                lg={7}
                className="pb-2 text-left d-flex justify-content-center p-0"
              >
                <span className="overflow-hidden">
                  pending <br />
                  appointments
                </span>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={4} md={3} className="text-white px-1">
          <div
            className="rounded-lg py-md-3"
            style={{ backgroundColor: "#3da5f4" }}
          >
            <Row className="justify-content-center align-items-center p-0">
              <Col xs={12} lg={5} className="h-100 w-100 text-center">
                <span className="font-weight-bold" style={{ fontSize: "3rem" }}>
                  10
                </span>
              </Col>
              <Col
                xs={12}
                lg={7}
                className="pb-2 text-left d-flex justify-content-center p-0"
              >
                <span className="overflow-hidden">
                  Today's <br />
                  appointments
                </span>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={4} md={3} className="text-white px-1">
          <div
            className="rounded-lg py-md-3"
            style={{ backgroundColor: "#00c689" }}
          >
            <Row className="justify-content-center align-items-center p-0">
              <Col xs={12} lg={5} className="h-100 w-100 text-center">
                <span className="font-weight-bold" style={{ fontSize: "3rem" }}>
                  30
                </span>
              </Col>
              <Col
                xs={12}
                lg={7}
                className="pb-2 text-left d-flex justify-content-center p-0"
              >
                <span className="overflow-hidden">
                  Total <br />
                  appointments
                </span>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={4} md={3} className="text-white px-1">
          <div
            className="rounded-lg py-md-3"
            style={{ backgroundColor: "#f15263" }}
          >
            <Row className="justify-content-center align-items-center p-0">
              <Col xs={12} lg={5} className="h-100 w-100 text-center">
                <span className="font-weight-bold" style={{ fontSize: "3rem" }}>
                  04
                </span>
              </Col>
              <Col
                xs={12}
                lg={7}
                className="pb-2 text-left d-flex justify-content-center p-0"
              >
                <span className="overflow-hidden">
                  Total <br />
                  Patients
                </span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="bg-white mt-3 rounded-lg">
        <TableCaption />
        <MyTable data={dashboardData} toggle={toggle} setId={setId} />
      </Row>
      <ModalforPres modal={modal} toggle={toggle} id={id} />
    </>
  );
};

const TableCaption = () => {
  return (
    <Col
      xs={12}
      className="d-flex justify-content-between align-items-center py-3"
    >
      <h3 className="t-green font-weight-bold">Recent Appointments</h3>
      <div>
        <div className="border p-1 rounded-lg">
          <span className="border-right border-secondary px-2">
            <i className="fa fa-calendar"></i>
          </span>
          <span>
            <select name="wmd" className="border-0">
              <option value="week">week</option>
              <option value="day">day</option>
              <option value="month">month</option>
            </select>
          </span>
        </div>
      </div>
    </Col>
  );
};

const MyTable = ({ data, toggle, setId }) => {
  return (
    <Col xs={12}>
      <Table responsive className="text-center">
        <tr className="text-secondary">
          <th>Sr. No.</th>
          <th>Date</th>
          <th>Time</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Prescription</th>
          <th>Action</th>
        </tr>

        {data &&
          data.length > 0 &&
          data.map((data, i) => {
            return (
              <tr>
                <td>
                  <span>{i < 8 ? 0 : ""}</span>
                  {i + 1}
                </td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td ref={(name) => name}>{data.name}</td>
                <td>{data.phone}</td>
                <td>
                  {data.prescription ? (
                    <span className="c-green-grad-right px-3 py-1 text-white rounded-pill">
                      view
                    </span>
                  ) : (
                    <span>not given</span>
                  )}
                  <span
                    className="text-warning btn"
                    onClick={(e) => {
                      toggle();
                      setId(data._id);
                    }}
                  >
                    <i className="fa fa-pencil"></i>
                  </span>
                </td>
                <td>
                  <select
                    name="status"
                    className="c-green-grad-bottom rounded text-center text-white border-0 py-1 text-center"
                    defaultValue={data.status ? data.status : "pending"}
                  >
                    <option value="cancel" className="t-green">
                      cancel
                    </option>
                    <option value="approved" className="t-green">
                      approved
                    </option>
                    <option value="pending" className="t-green">
                      pending
                    </option>
                  </select>
                </td>
              </tr>
            );
          })}
      </Table>
      {data === null && <Loader />}
      {data && data.length === 0 && (
        <p className="text-center text-danger">No Appointments</p>
      )}
    </Col>
  );
};

export default Dashboard;
