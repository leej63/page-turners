import React, { useState } from "react";
import Nav from "../../nav";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "./user.css"; 
import { NavLink } from "react-router-dom";

function RegisterScreen() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleRegister = async () => {}
  return (
    <div className="register-container">
      <Nav />
      <div className="register-form">
        <h1 className="register-title">Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Choose a username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <button className="btn btn-primary mt-3">Register</button>
          <div className="mt-2">   
            <NavLink className="nav-link" activeClassName="active" exact to="/login">
                Already have an account?    
            </NavLink>
          </div>        
          </form>
      </div>
    </div>
  );
}

export default RegisterScreen;