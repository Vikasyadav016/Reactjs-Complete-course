// // For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
// // For numbers which are multiples of both three and five, print "FizzBuzz".

import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const FizzBuzz = () => {
  const [arrayForFizzBuzz, setArrayForFizzBuzz] = useState([]);
  const [finalOutputv, setFinalOutPut] = useState();
  const handleAddValue = () => {
    setArrayForFizzBuzz([...arrayForFizzBuzz, ""]);
  };

  const handleRemoveValue = (index) => {
    const newArray = arrayForFizzBuzz.filter((_, i) => i !== index);
    setArrayForFizzBuzz(newArray);
  };

  const findFizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return number;
    }
  };

  const handleFinalSubmit = () => {
    if (arrayForFizzBuzz) {
      const finalOutput = arrayForFizzBuzz.map((value) =>
        findFizzBuzz(Number(value))
      );
      setFinalOutPut(finalOutput);
      console.log("finaloutput", finalOutput);
    }
  };

  return (
    <div>
      <Container>
      <h3>FizzBuzz</h3>
      <Card>
        <Card.Body>
          <Form>
            {arrayForFizzBuzz.map((value, index) => (
              <Form.Group controlId={`formInput${index}`} key={index}>
                <Form.Label>Input {index + 1}</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter value"
                  value={value}
                  onChange={(e) => {
                    const newArray = [...arrayForFizzBuzz];
                    newArray[index] = e.target.value;
                    setArrayForFizzBuzz(newArray);
                  }}
                />
                <Button
                  variant="danger"
                  onClick={() => handleRemoveValue(index)}
                >
                  Remove
                </Button>
                <p>{value && findFizzBuzz(Number(value))}</p>
              </Form.Group>
            ))}
            <Button onClick={handleAddValue}>Add more value</Button>
            <Button
              variant="primary"
              // onClick={() =>
              //   console.log(
              //     arrayForFizzBuzz.map((val) => findFizzBuzz(Number(val)))
              //   )
              // }
              onClick={handleFinalSubmit}
            >
              Final Submit
            </Button>
          </Form>
        </Card.Body>
        {finalOutputv && (
          <Card.Footer>
            <h3>{finalOutputv.join(",")}</h3>
          </Card.Footer>
        )}
      </Card>
      </Container>
    </div>
  );
};

export default FizzBuzz;
