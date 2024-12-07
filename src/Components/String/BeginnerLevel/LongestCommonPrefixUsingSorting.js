/*

Given an array of strings arr[], the task is to return the longest common prefix among each and every strings present in the array. If there’s no prefix common in all the strings, return “”.

Examples:

Input: arr[] = [“geeksforgeeks”, “geeks”, “geek”, “geezer”]
Output: “gee”
Explanation: “gee” is the longest common prefix in all the given strings: “geeksforgeeks”, “geeks”, “geeks” and “geezer”.

Input: arr[] = [“apple”, “ape”, “april”]
Output : “ap”
Explanation: “ap” is the longest common prefix in all the given strings: “apple”, “ape” and “april”.

Input: arr[] = [“hello”, “world”]
Output: “”
Explanation: There’s no common prefix in the given strings.

*/

import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const LongestCommonPrefixUsingSorting = () => {
  const [arr, setInput] = useState(""); // Storing input as a string
  const [result, setResult] = useState("");

  const findLongestCommonPrefixUsingSorting = () => {
    // Split input string into an array of words based on spaces
    const wordsArray = arr
      .split(" ")
      .map((word) => word.trim())
      .filter((word) => word !== "");

    if (wordsArray.length === 0) {
      setResult(""); // Handle case where no words are input
      return;
    }

    // Sort the array
    wordsArray.sort();

    // Get the first and the last string after sorting
    const first = wordsArray[0];
    const last = wordsArray[wordsArray.length - 1];

    let i = 0;
    // Compare the characters of the first and last string
    while (i < first.length && i < last.length && first[i] === last[i]) {
      i++;
    }

    // The longest common prefix is the substring from the start to index i
    const longestCommonPrefix = first.substring(0, i);

    console.log("Longest Common Prefix:", longestCommonPrefix);
    setResult(longestCommonPrefix);
  };

  return (
    <div>
      <h3>Longest Common Prefix Using Sorting</h3>
      <hr />
      <Form>
        <FormGroup>
          <FormLabel>Enter multiple words (separated by space):</FormLabel>
          <FormControl
            type="text"
            autoFocus
            value={arr}
            onChange={(e) => setInput(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button onClick={findLongestCommonPrefixUsingSorting}>Check</Button>
        <hr />
        {result && (
          <FormGroup>
            <FormLabel>Result:</FormLabel>
            <FormControl
              type="text"
              autoFocus={result ? "on" : "off"}
              value={result}
              disabled
              readOnly
            ></FormControl>
          </FormGroup>
        )}
      </Form>
    </div>
  );
};

export default LongestCommonPrefixUsingSorting;
