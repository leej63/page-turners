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
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk({ username, password }));
      // double check navigates to correct page after login
      navigate("/profile");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="login-container">
      <Nav />
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
