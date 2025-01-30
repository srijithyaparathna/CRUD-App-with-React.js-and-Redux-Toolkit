import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector hooks
import { getUser, deleteUser } from "./redux/userSlice"; // Import actions
import { useNavigate } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user); // Accessing users from Redux store
  const navigate = useNavigate(); // Hook for navigation

  // Fetch users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/users");
        dispatch(getUser(response.data)); // Dispatch users to Redux store
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [dispatch]);

  // Handle delete user
  const handleDelete = async (userId) => {
    try {
      // Make the request to delete the user from the backend
      await axios.delete(`http://localhost:5001/users/${userId}`);
      
      // Dispatch the action to update Redux store
      dispatch(deleteUser(userId)); // This should update the state and trigger a re-render
      
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user!');
    }
  };
  

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <button
          className="btn btn-success btn-sm"
          onClick={() => navigate("/create")}
        >
          Add +
        </button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}> {/* Ensure _id is used */}
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => navigate(`/edit/${user._id}`)} // Use user._id for navigation
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => handleDelete(user._id)} // Delete button
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
