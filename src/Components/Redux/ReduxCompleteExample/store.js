// here i am going to create a centralized store for our application uses.
//I will be able to access this store from any component of my react application.

import { createStore } from "redux";
import { userReducerFunction } from "./Reducers";

const store = createStore(userReducerFunction);

export default store;