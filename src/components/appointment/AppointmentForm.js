import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useForm } from "react-hook-form";
import "./appointment.css";
import { useState } from "react";
import AppointmentSuccess from "./AppointmentSuccess";

const AppointmentForm = ({ toggle, modal, title }) => {
  const [successMsg, setSuccessMsg] = useState(false);

  return (
    <>
      {!successMsg && (
        <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered">
          <ModalHeader
            toggle={toggle}
            className="border-0 t-green font-weight-bold"
            style={{ fontSize: "3rem" }}
          >
            {title}
          </ModalHeader>
          <ModalBody>
            <MyForm successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
          </ModalBody>
        </Modal>
      )}
      {successMsg && (
        <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered">
          <AppointmentSuccess />
        </Modal>
      )}
    </>
  );
};

const MyForm = ({ successMsg, setSuccessMsg }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    const url = "https://doctors-portal-t.herokuapp.com";
    fetch(url + "/appointmentData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          e.target.reset();
          setSuccessMsg(true);
        } else {
          alert("your appointment was not successful.Try again.");
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="time"
        name="time"
        min="18:00"
        max="20:00"
        value="18:00"
        ref={register({ required: true })}
        className="form-control py-4 mt-3"
      />

      <input
        type="text"
        name="name"
        placeholder="YOUR NAME"
        ref={register({ required: true, minLength: 3, maxLength: 20 })}
        className="form-control py-4 mt-3"
      />
      {errors.name && (
        <p className="text-danger text-center">This field is required.</p>
      )}

      <input
        type="tel"
        name="phone"
        ref={register({ minLength: 11, maxLength: 11, required: true })}
        placeholder="Your phone"
        className="form-control py-4 mt-3"
      />
      {errors.phone && (
        <p className="text-danger text-center">This field is required.</p>
      )}
      {errors.minLength && (
        <p className="text-danger text-center">exactly 11 digits required.</p>
      )}
      {errors.maxLength && (
        <p className="text-danger text-center">exactly 11 digits required.</p>
      )}

      <input
        type="email"
        name="email"
        ref={register({ required: true })}
        placeholder="Your email"
        className="form-control py-4 mt-3"
      />
      {errors.email && (
        <p className="text-danger text-center">This field is required.</p>
      )}

      <input
        type="date"
        name="date"
        ref={register({ required: true })}
        placeholder="Date"
        className="form-control py-4 mt-3"
      />
      {errors.date && (
        <p className="text-danger text-center">This field is required.</p>
      )}

      <div className="container">
        <div className="row justify-content-between mt-3">
          <select name="gender" ref={register} className="col-4 py-2 border">
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.gender && (
            <span className="text-danger text-center">
              This field is required.
            </span>
          )}

          <input
            type="number"
            name="age"
            ref={register({ required: true })}
            min={1}
            className="col-3 py-2 border"
            placeholder="Your age"
          />
          {errors.age && (
            <span className="text-danger text-center">
              This field is required.
            </span>
          )}

          <input
            type="number"
            name="weight"
            ref={register({ required: true })}
            min={10}
            className="col-4 py-2 border"
            placeholder="Your weight"
          />
          {errors.weight && (
            <span className="text-danger text-center">
              This field is required.
            </span>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <input
          type="submit"
          className="btn c-green-grad-right text-white px-4 mt-3"
        />
      </div>
    </form>
  );
};

export default AppointmentForm;
