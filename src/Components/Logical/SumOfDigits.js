import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const SumOfDigits = () => {
  const [number, setNumber] = useState(0);
  console.log(number);
  const [finalOutput, setFinalOutPut] = useState();

  const handleSumOfDigit = () => {
    console.log("handleSumOfDigit", number);
    let finalOutPutV = 0;
    const numStr = number.toString();
    for (let index = 0; index < numStr.length; index++) {
      const digit = parseInt(numStr[index], 10);
      finalOutPutV += digit;
    }
    setFinalOutPut(finalOutPutV);
    return finalOutPutV;
  };

  const handleSumOfDigitv = () => {
    let numberV = Math.abs(number);
    let finalOutPutV = 0;
    while (numberV > 0) {
      let x = numberV % 10;
      finalOutPutV += x;
      numberV = Math.floor(numberV / 10);
    }
    setFinalOutPut(finalOutPutV);
    return finalOutPutV;
  };

  return (
    <div>
      <h2>Sum Of Digits</h2>
      <Form>
        <FormGroup>
          <FormLabel>Enter number to calculate sum</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter any numerical digit"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button onClick={handleSumOfDigitv}>Find Sum Of Digits</Button>
      </Form>
      {finalOutput && (
        <Card>
          <Card.Body>{finalOutput}</Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SumOfDigits;
