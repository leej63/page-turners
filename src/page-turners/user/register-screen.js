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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        try {
            await dispatch(registerThunk({ username, password, firstName, lastName }));
            navigate("/tuiter/profile");
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div className="register-container">
            <Nav/>
        <div className="register-form">
            <h1 className="register-title">Register</h1>
            <form>
            <div className="form-group mt-2">
                <label className="form-label" htmlFor="username">Username</label>
                <input className="form-control" type="text" value={username} id="username"
              placeholder="Choose a username"
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="form-group mt-2">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" value={password} id="password"
              placeholder="Create a password"
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="form-group mt-2">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input className="form-control" type="text" value={firstName} id="firstName"
              placeholder="Enter your first name"
                       onChange={(event) => setFirstName(event.target.value)}/>
            </div>
            <div className="form-group mt-2">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input className="form-control" type="text" value={lastName} id="lastName"
              placeholder="Enter your last name"
                       onChange={(event) => setLastName(event.target.value)}/>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleRegister}>
            Register
            </button>
            <div className="mt-2">   
            <NavLink className="nav-link" activeClassName="active" exact to="/login">
                Already have an account?    
            </NavLink>
          </div>   
          </form>
      </div>
    </div>
  );
};
export default RegisterScreen;