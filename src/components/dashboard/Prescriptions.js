import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Container, Row, Table } from "reactstrap";
import serverName from "../../serverName";
import Loader from "../Loader";
import ModalforPres from "./ModalforPres";

const Prescriptions = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    Axios.get(`${serverName}/dashboard`).then((res) =>
      setData(res.data)
    );
  }, []);
  return (
    <Container fluid className="font-weight-bold bg-white mt-3">
      <Row>
        <h3 className="text-capitalize mt-2 ml-2 py-3">all Prescriptions</h3>
      </Row>
      <Row>
        <Table responsive className="text-center">
          <tr className="text-capitalize text-black-50">
            <th>sr no.</th>
            <th>date</th>
            <th>name</th>
            <th>contact</th>
            <th>prescription</th>
          </tr>
          {data &&
            data.length > 0 &&
            data.map((pres, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{pres.date}</td>
                  <td>{pres.name}</td>
                  <td>{pres.phone}</td>
                  {pres.prescription ? (
                    <td>
                      <span
                        className="btn c-green-grad-bottom text-white px-3 py-2 rounded-lg"
                        onClick={() => {
                          setId(pres._id);
                          toggle();
                        }}
                      >
                        view
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className="px-3 py-2">not given</span>
                    </td>
                  )}
                </tr>
              );
            })}
        </Table>
        <ModalforPres modal={modal} toggle={toggle} id={id} />
        {data === null && <Loader />}
        {data && data.length === 0 && <p>no Prescriptions available.</p>}
      </Row>
    </Container>
  );
};

export default Prescriptions;
