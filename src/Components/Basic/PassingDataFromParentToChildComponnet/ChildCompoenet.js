import React from "react";
import {
  Card,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const ChildComponent = ({ formValue, handleOnChange }) => {
  return (
    <div>
      <Container>
        <Card>
          <Form>
            <FormGroup>
              <FormLabel>Name: -</FormLabel>
              <FormControl
                name="name"
                value={formValue?.name}
                onChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email: -</FormLabel>
              <FormControl
                name="email"
                value={formValue?.email}
                onChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>aadhar: -</FormLabel>
              <FormControl
                name="aadhar"
                value={formValue?.aadhar}
                onChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Contact: -</FormLabel>
              <FormControl
                name="contact"
                value={formValue?.contact}
                onChange={handleOnChange}
              />
            </FormGroup>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default ChildComponent;
