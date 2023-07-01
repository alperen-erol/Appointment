import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const DoctorList = ({ doctor }) => {
  return (
    <Container>
      <Row className=" justify-content-center">
        {doctor.map((doctor) => (
          <Col key={doctor.id} xs={4} sm={4} md={3}>
            <img
              className=" img-thumbnail doctor-img"
              src={doctor.img}
              alt={doctor.name}
            />
            <h5>{doctor.name}</h5>
            <h6>{doctor.dep}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorList;
