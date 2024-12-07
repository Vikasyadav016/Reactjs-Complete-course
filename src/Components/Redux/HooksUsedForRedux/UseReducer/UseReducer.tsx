import React, { useReducer } from "react";

export const initialState = {
  count: 0,
};//this is the initial state variable which passed to reducer parameter like state = initailState.

export const reducer = (state, action) => {};// this is reducer , it is a fure function that take initial state and a action and return a new state after performing action

const UseReducer = () => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <div>
      UseReducer
      <h2>Current state :</h2>
    </div>
  );
};

export default UseReducer;

/*

Concept of useReducer hook in redux

Definition: 
            useReducer hook is buildin function provided by react.
            It is used to manage more complex state login in React functional component.
            useReducer is an alternative hook of useState hook. 

Usefull in case:
            When the state logic involves multiple sub-values or when the next state depends on the previous one.
            It's particularly useful when handling complex state transitions, such as in the case of managing forms, authentication states, or complex interactions with a larger application state.

Basic uses:
            useReducer works similarly to useState but allows for more control over state transitions, 
            especially when state depends on actions or when complex state updates are required. 
            It uses a reducer function (similar to Redux) to handle state updates based on actions.

Syntax: 
            const [state, dispatch] = useReducer(reducer, initialState);

            reducer: A function that receives the current state and an action and returns the new state.
            initialState: The initial state value (can be an object, array, primitive, etc.).
            state: The current state value.
            dispatch: A function that is used to dispatch actions to the reducer to update the state.


*/
//for more details example go above 