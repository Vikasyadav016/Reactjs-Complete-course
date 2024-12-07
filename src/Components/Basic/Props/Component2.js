import React from "react";
import { Button, Modal } from "react-bootstrap";

const Component2 = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} centered>
        <Modal.Header>Props</Modal.Header>
        <Modal.Body>Hello friends</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Component2;
