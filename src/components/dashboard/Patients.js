import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import Loader from "../Loader";

const Patients = () => {
  const [patientData, setPatientData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    Axios.get("https://doctors-portal-t.herokuapp.com/dashboard").then((res) =>
      setPatientData(res.data)
    );
  }, []);
  return (
    <>
      <Row>
        <p>{id}</p>
      </Row>
      <Row>
        <Col xs={12} className="bg-white">
          <Table responsive className="text-center">
            <tr className="text-secondary">
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Contact</th>
            </tr>

            {patientData &&
              patientData.length > 0 &&
              patientData.map((data, i) => {
                return (
                  <tr>
                    <td>
                      <span>{i < 8 ? 0 : ""}</span>
                      {i + 1}
                    </td>
                    <td>{data.name}</td>
                    <td>{data.gender}</td>
                    <td>{data.age}</td>
                    <td>{data.weight}</td>
                    <td>{data.phone}</td>
                  </tr>
                );
              })}
          </Table>
          {patientData === null && <Loader />}
          {patientData && patientData.length === 0 && (
            <p className="text-center text-danger">No Appointments</p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Patients;
