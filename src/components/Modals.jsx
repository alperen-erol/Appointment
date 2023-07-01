import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Modals({ doctorName, show, handleClose }) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
console.log(date)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {doctorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                onChange={(e) => setPatientName(e.target.value)}
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicPassword">
              <Form.Label >Date&Time</Form.Label>
              <Form.Control onChange={(e) => setDate(e.target.value)} type="datetime-local" />
            </Form.Group>

            <div className=" text-center">
              <Button variant="primary" type="submit" className="me-4">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
