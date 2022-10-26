import Axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap";
import serverName from "../../serverName";
import Loader from "../Loader";

const ModalforPres = ({ modal, toggle, id }) => {
  const [medicine, setMedicine] = useState({ name: "", doses: "0-0-1" });
  const [pres, setPres] = useState(null);
  const [petient, setPetient] = useState(null);
  const medname = useRef(null);

  const handleAddMedicine = (e) => {
    e.preventDefault();
    Axios.patch(
      `${serverName}/prescribe?id=${id}`,
      medicine
    ).then((res) => {
      if (res.data) {
        setPres(res.data);
        medname.current.value = "";
        medname.current.focus();
      } else {
        alert("couldn't add the prescribed medicine.");
      }
    });
  };

  const handleRemoveMedicine = (ind) => {
    Axios.patch(
      `${serverName}/removeMedicine?ind=${ind}&id=${id}`
    ).then((res) => {
      if (res.data) {
        setPres(res.data);
      } else {
        alert("couldn't remove the medicine.");
      }
    });
  };

  useEffect(() => {
    if (id !== null) {
      Axios.get(`${serverName}/petient?id=${id}`).then(
        (res) => {
          setPetient(res.data);
          setPres(res.data.prescription);
        }
      );
    }
  }, [id]);
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} className="t-green border-0">
        Prescription
      </ModalHeader>
      <ModalBody>
        {petient && (
          <div className="d-flex justify-content-between align-items-center border-bottom">
            <span>{petient.name}</span>
            <span>{petient.date}</span>
          </div>
        )}
        <form className="mt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={5}>
              <input
                type="text"
                placeholder="Medicine"
                ref={medname}
                className="w-100 h-100"
                onBlur={(e) =>
                  {
                    setMedicine({ ...medicine, name: e.target.value });
                    console.log(medicine)
                  }
                }
                required
              />
            </Col>
            <Col xs={12} md={5}>
              <select
                name="doses"
                className="w-100 h-100"
                onBlur={(e) =>
                  setMedicine({ ...medicine, doses: e.target.value })
                }
              >
                <option value="0-0-1">0-0-1</option>
                <option value="0-1-0">0-1-0</option>
                <option value="1-0-0">1-0-0</option>
                <option value="1-0-1">1-0-1</option>
                <option value="1-1-0">1-1-0</option>
                <option value="0-1-1">0-1-1</option>
                <option value="1-1-1">1-1-1</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <button type="submit" className="btn btn-outline-primary w-100" onClick={(e)=>handleAddMedicine(e)}>
                <i className="fa fa-plus"></i>
              </button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {pres === null && <Loader />}

              <Table responsive className="text-center">
                <tr>
                  <th>order</th>
                  <th>medicine</th>
                  <th>doses</th>
                  <th>action</th>
                </tr>

                {pres &&
                  pres.length > 0 &&
                  pres.map((data, ind) => {
                    return (
                      <tr
                        className="
                        border-bottom"
                        key={ind}
                      >
                        <td>{ind + 1}</td>
                        <td>
                          <span className="text-left">{data.name}</span>
                        </td>
                        <td>
                          <span className="text-right">{data.doses}</span>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger fa fa-trash-o"
                            onClick={() => handleRemoveMedicine(ind)}
                          ></button>
                        </td>
                      </tr>
                    );
                  })}
              </Table>
              {pres === undefined && (
                <p className="text-center text-danger">
                  No prescription is given.
                </p>
              )}
              {pres && pres.length === 0 && (
                <p className="text-center text-danger">
                  No prescription is given.
                </p>
              )}
            </Col>
          </Row>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ModalforPres;
