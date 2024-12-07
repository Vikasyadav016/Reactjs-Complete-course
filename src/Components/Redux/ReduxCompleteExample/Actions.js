// here i am going to declear action which call reducer.
// Action is also called action creator

import {
  ADD_USER,
  DELETE_USER,
  GET_USER_DETAILS,
  UPDATE_USER,
} from "./ActionTypes";
// These are the constants or actionTypes that are imported from ActionType.js
//it helps me to reduce duplicacy.

export const getUserDetails = () => ({
  type: GET_USER_DETAILS,
}); //this action is used to get details of available user.

export const AddUser = (data) => ({
  type: ADD_USER,
  payload: data,
}); //This action helps me to add new user. it is taking a payload which is new user details to add.

export const UpdateUser = (data) => ({
  type: UPDATE_USER,
  payload: data,
}); //This action helps me to update existing user details. It is also taking a payload data for updating user

export const DeleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
}); //This action i am using for deleting existing user details. It takes only id of that user.
