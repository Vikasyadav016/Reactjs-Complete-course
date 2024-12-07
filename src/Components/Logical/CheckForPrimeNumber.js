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

/*

Write a function that checks if a given number is prime (a prime number is a number greater than 1 that has no divisors other than 1 and itself).

Example:

Input: 7
Output: true


*/

const CheckForPrimeNumber = () => {
  const [numberToCheck, setNumberToCheck] = useState("");
  const [result, setResult] = useState(null);

  const checkForPrimeNumber = () => {
    const num = parseInt(numberToCheck, 10);
    if (isNaN(num) || num <= 1) {
      return "Not valid";
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "Not prime";
      }
    }
    return "Prime";
  };

  const handleCheckPrime = () => {
    const result = checkForPrimeNumber();
    setResult(result);
  };

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Check For Prime Number</Card.Header>
          <Card.Body>
            <Form>
              <FormGroup>
                <FormLabel>
                  Enter number to check if it's prime or not:
                </FormLabel>
                <FormControl
                  autoFocus
                  type="number"
                  value={numberToCheck}
                  onChange={(e) => setNumberToCheck(e.target.value)}
                />
              </FormGroup>
              <Button onClick={handleCheckPrime}>Check</Button>
            </Form>
          </Card.Body>
          {result !== null && (
            <Card.Footer>
              {result === "Not valid" ? (
                <span>Enter a valid number greater than 1</span>
              ) : result === "Prime" ? (
                <span>Number is prime</span>
              ) : (
                <span>Not a prime number</span>
              )}
            </Card.Footer>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default CheckForPrimeNumber;
