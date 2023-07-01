import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modals from "./Modals";
const DoctorList = ({ doctor }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [doctorName, setDoctorName] = useState("");

  const handleDoctorClick = (doctorName) => {
    handleShow();
    setDoctorName(doctorName);
  };
  return (
    <Container>
      <Row className=" justify-content-center">
        {doctor.map((doctor) => (
          <Col
            key={doctor.id}
            xs={4}
            sm={4}
            md={3}
            onClick={() => handleDoctorClick(doctor.name)}
          >
            <img
              className=" img-thumbnail doctor-img "
              src={doctor.img}
              alt={doctor.name}
            />
            <h5>{doctor.name}</h5>
            <h6>{doctor.dep}</h6>
          </Col>
        ))}
      </Row>
      <Modals show={show} handleClose={handleClose} doctorName={doctorName} />
    </Container>
  );
};

export default DoctorList;
