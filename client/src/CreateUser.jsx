import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  const dispatch = useDispatch(); // Hook for dispatching actions

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("http://localhost:5001/users", {
        name,
        email,
        age,
      });
      dispatch(addUser(response.data)); // Add the new user to Redux state

      console.log("User added:", response.data);
      alert("User created successfully!");
      navigate('/'); // Navigate back to the users page

      // Optionally clear input fields after submission
      setName("");
      setEmail("");
      setAge("");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user!");
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>

          {/* Name Input */}
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Age Input */}
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
