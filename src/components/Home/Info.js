import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import clock from "../../resourses/doctors-portal/images/clock.png";
import location from "../../resourses/doctors-portal/images/location.png";
import call from "../../resourses/doctors-portal/images/call.png";

const Info = () => {
  const [infos, setInfos] = useState(null);
  useEffect(() => {
    const loadedInfos = [
      {
        backgroundColor: "c-green",
        icon: clock,
        heading: "Opening hours",
        text: "from 9 am to 6 pm",
      },
      {
        backgroundColor: "bg-dark",
        icon: location,
        heading: "visit our location",
        text: "dhanmondi,dhaka,bangladesh",
      },
      {
        backgroundColor: "c-green",
        icon: call,
        heading: "Call us at",
        text: "+0880188888000000",
      },
    ];
    setInfos(loadedInfos);
  }, []);
  return (
    <Row className="justify-content-center m-0 d-none d-lg-flex clearfix">
      <Container>
        <Row>
          {infos &&
            infos.map((el) => {
              return (
                <Col key={el.icon} md={4} className="pr-1 text-white">
                  <div
                    className={`${el.backgroundColor} p-4 rounded-lg  d-flex justify-content-center`}
                  >
                    <img
                      src={el.icon}
                      alt=""
                      className="float-left mr-3"
                      width="40"
                      height="50"
                    />
                    <div>
                      <h5>{el.heading}</h5>
                      <p>{el.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Row>
  );
};

export default Info;
