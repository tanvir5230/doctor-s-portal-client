import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import serverName from "../../serverName";
import Loader from "../Loader";

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    const formattedDate = `${year}-${month + 1}-${day}`;

    Axios.get(
      `${serverName}/dashboard?date=` + formattedDate
    ).then((res) => setData(res.data));
  }, [date]);
  return (
    <>
      <Row>
        <Col xs={12}>{id}</Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={6}>
          <Calendar
            value={date}
            onChange={(e) => setDate(e)}
            className="shadow-sm"
          />
        </Col>
        <Col xs={12} md={6} className="bg-white shadow-sm py-3 px-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="t-green font-weight-bold">Appointments</h4>
            </div>
            <div>
              <span className="text-secondary">
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }).format(date)}
              </span>
            </div>
          </div>

          <Table responsive className="text-center">
            <tr className="text-secondary">
              <th>name</th>
              <th>schedule</th>
              <th>action</th>
            </tr>
            {data &&
              data.length > 0 &&
              data.map((data) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.time}</td>
                    <td>
                      <select
                        name="visited"
                        className="c-green-grad-bottom border-0 rounded p-1 text-white"
                        defaultValue={data.visited}
                        onChange={(e) => {
                          Axios.patch(
                            `${serverName}/visitingStatus`,
                            {
                              visited: e.target.value,
                              id: data._id,
                            }
                          ).then((res) => console.log(res.data));
                        }}
                      >
                        <option value="yes" className="text-dark">
                          visited
                        </option>
                        <option value="no" className="text-dark">
                          not visited
                        </option>
                      </select>
                    </td>
                  </tr>
                );
              })}
          </Table>
          {data === null && <Loader />}
          {data && data.length === 0 && (
            <p className="text-danger text-center">
              No Appointments in this date.
            </p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Appointments;
