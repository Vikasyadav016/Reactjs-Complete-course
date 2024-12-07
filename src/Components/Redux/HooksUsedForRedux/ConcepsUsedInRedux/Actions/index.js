/*
Action Concepts in Redux


Definition

In Redux, 
Actions are plain JavaScript objects that describe an event or occurrence in the 
application that should trigger a state change. 
An action in Redux has at least a type field, which describes the kind of action being performed, 
and optionally, other fields (called payloads) that contain additional data necessary to update the 
state.


Anatomy/Structure of an Action

An action is a JavaScript object with the following properties:
type (required): 
                A string that indicates what kind of action this is. The type should be a constant or a unique string that is used to identify the action.
payload (optional): 
                The data that is sent along with the action. This is typically used to update the state with new information.
meta (optional): 
                Any additional information (such as metadata) that might be useful for the action (often used in more complex scenarios like logging or analytics).
error (optional): 
                A flag that may be set to true if the action represents an error.


Asynchronous Actions and Thunks
In Redux, actions are typically synchronous. However, 
you can use middleware (like Redux Thunk or Redux Saga) to handle asynchronous 
actions, such as API requests.

Redux Thunk allows action creators to return a function instead of an action object. 
This function can dispatch actions asynchronously.




Summary of Redux Actions

Action: 
        A plain JavaScript object that describes an event. It contains a type and may also include 
        additional properties like payload and meta.
Action Creator: 
        A function that returns an action. It helps ensure that action types are used consistently 
        and can encapsulate logic for creating actions.
Payload: 
        The optional data sent along with the action. It’s commonly used to provide information 
        needed to update the state.
Async Actions: 
        Redux actions can be asynchronous using middleware like Redux Thunk or Redux Saga.
Reducers: 
        Reducers handle actions and update the state based on the action type and payload.
        By using actions in this way, Redux provides a predictable flow for managing state 
        changes in your application, making the state updates explicit and traceable.




*/

// action types (often defined as constants)
const INCREMENT = "INCREMENT";

// action creator function
const increment = () => ({
  type: INCREMENT,
});

//action with payload

// action types
const SET_COUNTER = "SET_COUNTER";

// action creator with a payload
const setCounter = (value) => ({
  type: SET_COUNTER,
  payload: value,
});

//Example of Async Action Creator or action using Redux Thunk
const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_REQUEST' });
  
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    };
  };
  
