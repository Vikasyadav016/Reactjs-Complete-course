import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";

/*
Write a function that takes an array and removes all duplicate elements, 
returning a new array with only unique elements.

Example:

Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

*/

const RemoveDuplicates = () => {
  const [duplicateArray, setDuplicateArray] = useState([
    1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10,
  ]);

  function removeDuplicates(duplicateArray) {
    return duplicateArray.filter((value, index, self) => {
      return self.indexOf(value) === index; // Keep only the first occurrence of each value
    });
  }

  // Example usage

  const result = removeDuplicates(duplicateArray);
  console.log(result); // Output: [1, 2, 3, 4, 5]

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Remove Duplicates value</Card.Header>
          <Card.Body>
            <h2>Original array: {duplicateArray.join(",")}</h2>
            <h3>Unique Array : {result.join(",")}</h3>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RemoveDuplicates;
