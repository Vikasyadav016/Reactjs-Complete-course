/*
In Redux, the store is the central object that holds the state of your application. 
It is responsible for managing the state and dispatching actions to modify the state. 
The Redux store acts as a single source of truth for the entire application's state, 
which is often referred to as the global state.

Key Concepts Related to Store in Redux:

Store:
The store is created using the createStore() function and holds the application state. 
It also provides methods to:
Dispatch actions to update the state.
Get the current state of the application.
Subscribe to state changes to trigger re-rendering.

Reducers:
The store is populated by reducers, which are pure functions that take the current state and an 
action as arguments, then return a new state.

Actions:
Actions are plain JavaScript objects that describe what happened (e.g., type: 'ADD_ITEM'). 
They are dispatched to the store to trigger changes in the state.
Dispatch:

dispatch() is a method available on the store that sends actions to the reducers, 
which then update the state accordingly.
State:

The state is a JavaScript object that holds the data of the application. 
The state is updated in response to actions dispatched by the user or other parts of the application.
*/


// store.js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
/*
Using the Store in a React Application
In a React app, you typically use the Redux store with the Provider component from the react-redux 
library to make the store available to all components. You can then use useSelector to read the 
state and useDispatch to dispatch actions.

1. Wrap Your App with Provider
Wrap your entire application with the Provider component to give access to the Redux store.
*/

// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


/*
Full Redux Flow
Initial State: The store starts with an initial state, typically defined in a reducer.js file.
Action Dispatching: When a user interacts with the UI (e.g., clicks a button), an action is 
dispatched to the store using dispatch(action).
Reducer Processing: The dispatched action is received by the reducer, which checks the action's 
type and updates the state accordingly.
Store Update: The store updates the state and notifies all subscribed components, triggering 
re-renders of those components that depend on the changed state.

*/