import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Importing the user reducer from the slice

const store = configureStore({
  reducer: {
    users: userReducer, // Connecting the userSlice to the Redux store
  },
});

export default store;
