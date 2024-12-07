import React, { useState } from "react";
import Component2 from "./Component2";
import { Button } from "react-bootstrap";

const Component1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <Component2 show={show} handleClose={handleClose} />
      <Button onClick={handleShow}>Show</Button>
    </div>
  );
};

export default Component1;


// In this component i am sending show and handleClose as props value and fuction respectively to the Component2.
