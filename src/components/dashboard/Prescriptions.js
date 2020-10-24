import React from "react";
import { useParams } from "react-router-dom";

const Prescriptions = () => {
const { id } = useParams();
return <div>{id}</div>;
};

export default Prescriptions;
