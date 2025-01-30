import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [], // Ensure it matches the reducers
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload.map((user) => ({
        _id: user._id, // Ensure using _id consistently
        name: user.name,
        email: user.email,
        age: user.age,
        role: user.role,
      }));
    },

    // Add a new user
    addUser: (state, action) => {
      state.user.push(action.payload);
    },

    // Update an existing user
    updateUser: (state, action) => {
      const { _id, name, email, age, role } = action.payload;
      const existingUser = state.user.find((user) => user._id === _id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.age = age;
        existingUser.role = role;
      }
    },

    // Delete a user by _id
    deleteUser: (state, action) => {
      state.user = state.user.filter((user) => user._id !== action.payload);
    },
  },
});

export const { getUser, addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
