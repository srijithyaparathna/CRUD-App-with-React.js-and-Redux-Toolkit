import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/userSlice";
import UpdateUser from "./UpdateUser";
function App() {

 // Run once when the component mounts

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
