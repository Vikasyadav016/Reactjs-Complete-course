import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const ValidParentheses = () => {
  const [input, setInput] = useState("");

  const example = "hello[x{y(g+1}]";
  const parenthesis = ["(", "{", "[", ")", "}", "]"];
  const [foundPeranthesis, setFoundParenthesis] = useState([]);
  console.log("foundPeranthesis", foundPeranthesis);

  const checkForClosingPranthesis = async () => {
    console.log("initiated 1");
    let val = await handeCheckPranthesisAreValidOrNot();
    console.log("initiated 2");

    if (val && foundPeranthesis.length > 0) {
      console.log("inside if ");
      console.log(foundPeranthesis, "data");
      console.log(foundPeranthesis.length, "lenth");
      for (let index = 0; index < foundPeranthesis?.length; index++) {
        const element = foundPeranthesis[index];
        console.log(`element at index ${index}`, element);
        if (
          foundPeranthesis[index] ===
          foundPeranthesis[foundPeranthesis.length - (index + 1)]
        ) {
          console.log(
            `${foundPeranthesis[index]} has not available matching parenthesis`
          );
          console.log("v-1", foundPeranthesis[index]);
          // console.log("v-2",foundPeranthesis.length - (index+1));
          console.log(
            "v-3",
            foundPeranthesis[foundPeranthesis.length - (index + 1)]
          );
        } else {
          console.log("false");
        }
      }
    } else {
      console.log("NO");
    }
    console.log("last ");
    return;
  };

  const handeCheckPranthesisAreValidOrNot = () => {
    // const splitedExampleIntoArray = example.split("");
    const splitedExampleIntoArray = input.split("");
    console.log("splitedExampleIntoArray", splitedExampleIntoArray);
    splitedExampleIntoArray.forEach((eachChar) => {
      if (parenthesis.includes(eachChar)) {
        console.log("eachChar", eachChar);
        setFoundParenthesis((preState) => [...preState, eachChar]);
      }
    });
    console.log("1st complete");
    return true;
    // checkForClosingPranthesis();
  };

  return (
    <div>
      <Card>
        <Card.Header>Valid Parentheses</Card.Header>
        <Card.Body>
          <Form>
            <FormGroup>
              <FormLabel>Enter your parnthesis to check valid or not</FormLabel>
              <FormControl
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></FormControl>
            </FormGroup>
            <Button onClick={checkForClosingPranthesis}>
              Check Valid Parenthesis
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ValidParentheses;
