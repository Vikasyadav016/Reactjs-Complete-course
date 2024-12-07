import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const ReverseWordsInaString = () => {
  const [input, setInput] = useState("");
  const [reversedString, setReversedString] = useState([]);

  const handleReverseString = () => {
    const reversed = input.split(" ").reverse();
    console.log("reversed", reversed);
    setReversedString(reversed);
  };

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Reverse Words In a String</Card.Header>
          <Card.Body>
            <Form>
              <FormGroup>
                <FormLabel>Enter your String</FormLabel>
                <FormControl
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                ></FormControl>
              </FormGroup>
              <Button onClick={handleReverseString}>Reverse</Button>
            </Form>
          </Card.Body>
          <Card.Footer>
            {" "}
            {reversedString && <span>{reversedString.join(" ")}</span>}
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default ReverseWordsInaString;
