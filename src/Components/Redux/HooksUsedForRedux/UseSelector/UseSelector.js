import React from "react";
import { useDispatch, useSelector } from "react-redux";

// actions.js
export const increment = () => ({
  type: "INCREMENT",
});

// reducer.js
const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const UseSelector = () => {
  const count = useSelector((state) => state.count); // Accessing count from the Redux store
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
    </div>
  );
};

export default UseSelector;

/*
Concept of useSelector hook
Definition:
            The useSelector hook is a key part of React-Redux, 
            used to access the Redux store's state in a React functional component. 
            It allows you to extract pieces of state from the Redux store and subscribe to store updates, 
            causing the component to re-render whenever the selected state changes.

How useSelector Works

Selecting State: 
            The useSelector hook allows you to specify a part of the state to access, 
            typically a specific slice of the global store state.

Reactivity: 
            Whenever the selected part of the state changes, the component re-renders automatically, 
            ensuring the component is always up-to-date with the latest state.

Shallow Equality Check: 
            By default, useSelector uses shallow equality 
            (comparing references for objects or arrays) to determine if the selected state has changed. 
            If the selected state has changed, the component will re-render.      



Syntax  :
            const value = useSelector(selector);
            selector: A function that accepts the Redux store state and returns a piece of it. 
            The selector function is called whenever the state changes, 
            and it tells useSelector what part of the state to extract.

*/
