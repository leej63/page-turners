import React, { useState } from "react";
import Nav from "../../nav";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
import "./user.css";
import { NavLink } from "react-router-dom";

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    setError("");
    let response = await dispatch(registerThunk({ username, password, firstName, lastName, role }));

    if (response.error) {
      if (response.error.message.includes("409")) {
        console.log("Username already exists in database");
        setError("Username already exists in database");
        document.getElementById("username").focus();
      } else {
        
        if (!username) {
          document.getElementById("username").focus();
          setError("Empty username");
          return;
        }
        if (!password) {
          document.getElementById("password").focus();
          setError("Empty password");
          return;
        }
        if (!firstName) {
          document.getElementById("firstName").focus();
          setError("Empty first name");
          return;
        }
        if (!lastName) {
          document.getElementById("lastName").focus();
          setError("Empty last name");
          return;
        }

      }
    } else {
      console.log("success");
      localStorage.setItem("userId", response.payload._id);
      navigate("/profile");
    }
  };
  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-title">Register</h1>
        <form>
          <div className="form-group mt-2">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              className="form-control"
              id="role"
              value={role} // Store selected role in state
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="author">Author</option>
            </select>
          </div>
          
          <div className="form-group mt-2">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              value={username}
              id="username"
              placeholder="Choose a username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              value={password}
              id="password"
              placeholder="Create a password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              value={firstName}
              id="firstName"
              placeholder="Enter your first name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-control"
              type="text"
              value={lastName}
              id="lastName"
              placeholder="Enter your last name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button className="btn btn-primary mt-3" onClick={handleRegister}>
            Register
          </button>
          <div className="mt-2">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/login"
            >
              Already have an account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterScreen;
