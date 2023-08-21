import React, { useState } from "react";
import Nav from "../../nav";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import { NavLink } from "react-router-dom";
import "./user.css";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setError("");
    let response = await dispatch(loginThunk({ username, password, role }));

    if (response.error) {
      if (response.error.message.includes("401") || response.error.message.includes("404")) {
        console.log("Invalid Username/Password");
        setError("Invalid Username/Password");
        document.getElementById("username").focus();
      } else {
        console.log("Empty username or password");
        setError("Empty username or password");
        if (!username) {
          document.getElementById("username").focus();
        } else {
          document.getElementById("password").focus();
        }
      }
    } else {
      console.log("success");
      navigate("/profile");
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Login</h1>
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
          <div className="form-group mt2">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group mt2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          <button className="btn btn-primary mt-2" onClick={handleLogin}>
            Login
          </button>
          <div className="mt-2">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/register"
            >
              Don't have an account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
