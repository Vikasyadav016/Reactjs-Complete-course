/*
Concepts of Reducer in redux

In Redux, a reducer is a pure function that specifies how the application's state changes in 
response to an action. 

The reducer takes two arguments:
state: The current state of the application or a specific part of the state.
action: The action dispatched to update the state, which contains a type and may also include a 
payload.
The reducer returns a new state object based on the action that was dispatched. It should never 
modify the current state directly, as Redux relies on immutability to detect state changes and 
trigger re-renders in React components.
*/



// Basic Structure of a Reducer
// A reducer function typically looks like this:


const initialState = {
  count: 0,
};

export const reducerFunction = (state = initialState, action) => {
  switch (action.Type) {
    case "INCREMENT":
      return { ...state, count: count - 1 };
    case "DECREMENT":
      return { ...state, count: count + 1 };
    case "FETCH_DETAILS":
      return { ...state };
    case "SET_COUNTER":
      return { ...state, count: action.payload };
    default:
      break;
  }
};


/*
Explanation of the Reducer

state = initialState: The reducer takes two arguments, state and action. 
If the state is not passed (i.e., on the first call), it defaults to initialState.

action: The action contains the type and potentially additional data (like payload).

switch statement: The reducer checks the type of the action and updates the state accordingly.

For INCREMENT, it increases the count.
For DECREMENT, it decreases the count.
For SET_COUNTER, it sets the count to the value provided in action.payload.

Immutability: The return { ...state, count: state.count + 1 }; line creates a new object 

instead of modifying the existing state. This is important because Redux uses shallow comparison 
to detect changes, and directly modifying the state would prevent it from triggering a re-render.


Explanation of the Reducer

state = initialState: The reducer takes two arguments, state and action. 

If the state is not passed (i.e., on the first call), it defaults to initialState.

action: The action contains the type and potentially additional data (like payload).

switch statement: The reducer checks the type of the action and updates the state accordingly.

For INCREMENT, it increases the count.
For DECREMENT, it decreases the count.

For SET_COUNTER, it sets the count to the value provided in action.payload.

Immutability: The return { ...state, count: state.count + 1 }; line creates a new object 
instead of modifying the existing state. This is important because Redux uses shallow comparison 
to detect changes, and directly modifying the state would prevent it from triggering a re-render.


Key Concepts for Reducers
Pure Function: A reducer is a pure function, meaning:
It does not modify the arguments (state or action) directly.

Given the same input (state and action), it should always return the same output (new state).
Immutability: Redux requires that the state is never mutated directly. Instead, a new copy of the 
state is created with the necessary changes.

Default State: The state parameter defaults to an initial state if no state is 
provided (as in the first time the reducer runs).

Action Handling: A reducer uses the action.type to determine how to modify the state.
*/


/*
Combining Reducers with combineReducers

As your application grows, you'll likely have multiple reducers to handle 
different slices of state. Redux provides a utility called combineReducers to 
combine them into one main reducer.

*/

// counterReducer.js
const initialCounterState = {
    count: 0
  };
  
  export const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  
  // userReducer.js
  const initialUserState = {
    name: '',
    email: ''
  };
  
  export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  

  


  // rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export default rootReducer;



/*

Key Points About Reducers in Redux
Reducers are responsible for updating the state in response to actions.
Immutability: Redux requires that the state be updated immutably, which means you should return 
a new state object rather than modifying the current state.
Pure Function: A reducer is a pure function, meaning it only depends on its inputs (state and action) 
and produces predictable outputs.
Action Types: The reducer handles actions based on the action's type and updates the state accordingly.
Combining Reducers: For large applications, you can use combineReducers to combine multiple reducers, 
each managing a specific slice of the state.
Reducers are central to managing state in Redux, and understanding how to structure and handle them 
properly is key to mastering Redux for state management in your applications.

*/
