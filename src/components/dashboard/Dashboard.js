import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import serverName from "../../serverName";
import Loader from "../Loader";
import ModalforPres from "./ModalforPres";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    Axios.get(`${serverName}/dashboard`).then((res) =>
      setDashboardData(res.data)
    );
  }, [modal]);

  return (
    <>
      <Row
        className="flex-wrap p-0 g-0"
        style={{
          boxSizing: "border-box",
        }}
      >
        <SummaryCol title={"pending appointments"} number={10} bg={"#f15263"} />
        <SummaryCol title={"Today's appointments"} number={10} bg={"#3da5f4"} />
        <SummaryCol title={"Total appointments"} number={10} bg={"#00c689"} />
        <SummaryCol title={"Total Patients"} number={10} bg={"#ffc107"} />
      </Row>
      <Row className="bg-white mt-3 rounded-lg">
        <TableCaption />
        <MyTable data={dashboardData} toggle={toggle} setId={setId} />
      </Row>
      <ModalforPres modal={modal} toggle={toggle} id={id} />
    </>
  );
};

const SummaryCol = ({ title, number, bg }) => {
  return (
    <Col xs={4} md={3} className="text-white mt-2">
      <div className="rounded-lg py-3" style={{ backgroundColor: bg }}>
        <Row className="justify-content-center align-items-center m-0 p-0 g-0">
          <Col xs={12} lg={4} className="h-100 w-100 text-center p-0 m-0">
            <span
              className="font-weight-bold d-block"
              style={{ fontSize: "2.5rem" }}
            >
              {number}
            </span>
          </Col>
          <Col xs={12} lg={8} className="m-0 p-0">
            <span className="d-block w-100">
              {title.split(" ")[0]}
              <br />
              {title.split(" ")[1]}
            </span>
          </Col>
        </Row>
      </div>
    </Col>
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
  const history = useHistory();

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
                  {data.prescription && data.prescription.length > 0 ? (
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
                    className={`text-white border-0 p-2 font-weight-bold rounded text-white ${data.status}`}
                    defaultValue={data.status}
                    onInput={(e) => {
                      Axios.patch(
                        `${serverName}/changeStatus?id=${data._id}&status=${e.target.value}`
                      ).then((res) => {
                        if (res.data) {
                          history.replace("/doctor's-panel");
                        } else {
                          alert("couldnot change the status.");
                        }
                      });
                    }}
                  >
                    <option value="cancel">cancel</option>
                    <option value="approved">approved</option>
                    <option value="pending">pending</option>
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
