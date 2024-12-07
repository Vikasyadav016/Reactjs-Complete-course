import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import ChildComponent from "./ChildCompoenet";
import { useFormHandlingV } from "./formHandling";

const PassPtoC = () => {
  const { formValue, handleOnChange, formValueReset, handleSubmitData } =
    useFormHandlingV({
      name: "",
      age: "",
      aadhar: "",
      contact: "",
    });

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Pass data from parent to child via props.</Card.Header>
          <Card.Body>
            <ChildComponent
              formValue={formValue}
              handleOnChange={handleOnChange}
            />
          </Card.Body>
          <Card.Footer>
            <Button onClick={handleSubmitData} style={{ marginRight: "5px" }}>
              Submit
            </Button>
            <Button onClick={formValueReset}>Clear Form</Button>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default PassPtoC;
