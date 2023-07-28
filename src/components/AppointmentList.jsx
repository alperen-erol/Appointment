import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppointmentList = ({ appointments, setAppointments }) => {
  
  const handleDelete = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id))
  };
  return (
    <>
      {appointments.map((item) => {
        const { id, patient, doctor, day } = item;
        return (
          <Container key={id} className="appointment">
            <Row>
              <Col>
                <h3>{patient}</h3>
                <h3>{doctor}</h3>
              </Col>
              <Col>
                <h3>{new Date(day).toLocaleDateString()}</h3>
                <h3>{new Date(day).toLocaleTimeString()}</h3>
              </Col>
              <Col className=" d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="text-danger fs-3"
                  type="button"
                  onClick={()=>handleDelete(id)}
                />
              </Col>
            </Row>
          </Container>
        );
      })}
    </>
  );
};

export default AppointmentList;
