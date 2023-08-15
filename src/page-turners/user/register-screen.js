import React, { useState } from "react";
import Nav from "../../nav";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";


function RegisterScreen() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleRegister = async () => {}
    return (
        <div>
            <Nav/>
            <h1>Register Screen</h1>
            <div className="mt-2">
                <label className="form-label">Username</label>
                <input className="form-control" type="text"/>
            </div>
            <div className="mt-2">
                <label className="form-label">Password</label>
                <input className="form-control" type="password"/>
            </div>
            <div className="mt-2">
                <label className="form-label">First Name</label>
                <input className="form-control" type="text"/>
            </div>
            <div className="mt-2">
                <label className="form-label">Last Name</label>
                <input className="form-control" type="text"/>
            </div>
            <button className="btn btn-primary mt-2">
            Register
            </button>
        </div>
    );
};
export default RegisterScreen;