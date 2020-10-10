import React from "react";
import { Col, Row } from "reactstrap";
import blogger1 from "../../resourses/doctors-portal/images/pat-1.png";
const bloggerData = [
  {
    id: 1,
    name: "tanvir",
    date: new Date().toDateString(),
    title: "check at least a doctor in a year for your teeth",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam magni repellat vero quasi.",
    image: blogger1,
  },
  {
    id: 2,
    name: "tanvir",
    date: new Date().toDateString(),
    title: "check at least a doctor in a year for your teeth",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam magni repellat vero quasi.",
    image: blogger1,
  },
  {
    id: 3,
    name: "tanvir",
    date: new Date().toDateString(),
    title: "check at least a doctor in a year for your teeth",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam magni repellat vero quasi.",
    image: blogger1,
  },
];
const Blog = () => {
  return (
    <>
      <h4
        className="text-uppercase t-green text-center"
        style={{ marginTop: "100px" }}
      >
        our blog
      </h4>
      <h2 className="text-center">from our blog news</h2>
      <Row className="mt-5">
        {bloggerData.map((data) => {
          return (
            <Col key={data.id} md={4} className="p-3">
              <div className="p-4 shadow blog-home">
                <div className="d-flex">
                  <img src={data.image} width="50" height="50" alt="" />
                  <div className="ml-3">
                    <h6 className="font-weight-bold">{data.name}</h6>
                    <p className="text-secondary mb-3">{data.date}</p>
                  </div>
                </div>
                <h4 className="font-weight-bold">{data.title}</h4>
                <p className="text-secondary">{data.details}</p>
                <div className="hover-me p-4">
                  <div>
                    <h5>{data.name}</h5>
                    <p>{data.date}</p>
                  </div>
                  <h3>{data.title}</h3>
                  <div>
                    <a href="/" className="text-white">
                      <span
                        style={{
                          fontSize: "3.5rem",
                          fontWeight: "1000",
                        }}
                      >
                        &#8594;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Blog;
