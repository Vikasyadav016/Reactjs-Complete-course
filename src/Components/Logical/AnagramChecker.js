import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const AnagramChecker = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [anagram, setAnagram] = useState(false);
  const [loading, setLoading] = useState(false);

  const CheckerAnagramFunction = (str1, str2) => {
    setLoading(true);
    const normalizedStr1 = str1.toLowerCase().replace(/\s+/g, "");
    const normalizedStr2 = str2.toLowerCase().replace(/\s+/g, "");

    if (normalizedStr1.length !== normalizedStr2.length) {
      return false;
    }

    const strV1 = normalizedStr1.split("").sort().join("");
    const strV2 = normalizedStr2.split("").sort().join("");
    setLoading(false);
    return strV1 === strV2;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    // Add your form submission logic here

    if (input1 && input2) {
      const check = CheckerAnagramFunction(input1, input2);
      setAnagram(check);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formInput1">
        <Form.Label>Input 1</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first value"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formInput2">
        <Form.Label>Input 2</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter second value"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </Form.Group>
      <h3>
        {anagram ? (
          <span style={{ backgroundColor: "green", color: "black" }}>
            Yes, Input 1 and Input 2 is anagram.
          </span>
        ) : (
          <span style={{ backgroundColor: "black", color: "red" }}>
            No, Input 1 and Input 2 is not anagram.
          </span>
        )}
      </h3>
      <Button variant="primary" type="submit">
        {loading ? "Checking anagram..." : "Check"}
      </Button>
    </Form>
  );
};

export default AnagramChecker;
