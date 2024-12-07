//here i am going to create a reducer function that take initial state and action.
//based on that action it will perform operation/task and will return new state.

import {
  ADD_USER,
  DELETE_USER,
  GET_USER_DETAILS,
  UPDATE_USER,
} from "./ActionTypes";

const initialState = {
  user: [
    {
      userId: "Vikas101",
      userName: "Vikas Kumar",
      email: "VikasKumar@gmail.com",
      contactNo: 9897565678,
    },
  ],
};

export const userReducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      return { ...state };

    case ADD_USER:
    //   console.log("Add user in reducer", action.payload);
      return { ...state, user: [...state.user, action.payload] };

    case UPDATE_USER:
      return {
        ...state,
        user: state.user.map((user) =>
          user.userId === action.payload.userId
            ? { ...user, ...action.payload }
            : user
        ),
      };

    case DELETE_USER:
    //   console.log("delete user in reducer", action.payload);
      return {
        ...state,
        user: state.user.filter(
          (toDelete) => toDelete.userId !== action.payload
        ),
      };

    default:
      return state;
  }
};
