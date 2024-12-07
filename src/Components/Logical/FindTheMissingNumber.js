import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";

/*
Question : Find the missng number.
Suppose given number series is numberSeries = 1,2,3,5
then have to find missing number in numberSeries.
the output should be 4.


Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one number that is missing from the array.
Example:
Input: [3, 0, 1]
Output: 2
*/

const FindTheMissingNumber = () => {
  const [numberSeries, setNumberSeries] = useState([
    1, 2, 3, 4, 5, 6, 7, 9, 10, 8, 12,
  ]);

  const findTheMissingNumber = () => {
    console.log("numberSeries", numberSeries);
    let totalSum = ((numberSeries.length + 1) * (numberSeries.length + 2)) / 2; // Sum of all numbers from 1 to n
    let actualSum = numberSeries.reduce((acc, num) => acc + num, 0); // Sum of numbers in the array

    const missingNumber = totalSum - actualSum; // The difference will give the missing number
    return missingNumber;
  };
  const value = findTheMissingNumber();

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>Find The Missing Number</Card.Header>
          <Card.Body>
            <h3>
              Original number:{" "}
              {numberSeries && numberSeries.map((number) => number + ",")}
            </h3>
            <h4>Missing number in Original number: {value}</h4>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default FindTheMissingNumber;

/*
Explanation:
Sum Formula:

The sum of the first n natural numbers is given by the formula:
totalSum=(𝑛+1)×(𝑛+2)/2
​
where n + 1 is the length of the series.
Actual Sum:
actualSum is the sum of all the numbers that exist in the given series (i.e., the sum of elements in numberSeries).
Finding Missing Number:

The difference between totalSum (sum of all numbers from 1 to n) and actualSum (sum of numbers in the array) will give you the missing number.
Example Walkthrough:
For the input numberSeries = [1, 2, 4, 5, 6]:

totalSum for numbers from 1 to 6 is 21 (because the sum of numbers from 1 to 6 is 1 + 2 + 3 + 4 + 5 + 6 = 21).
actualSum for the given array [1, 2, 4, 5, 6] is 18 (sum of the array elements).
The missing number is 21 - 18 = 3.
Time Complexity:
Time Complexity: O(n), where n is the length of the numberSeries array, because the reduce() method iterates over the array once to compute the sum.
Space Complexity: O(1), since the extra space used does not depend on the input size.

*/
