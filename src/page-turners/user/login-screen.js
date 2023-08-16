import React, { useState } from "react";
import Nav from "../../nav";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";


function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
        <div>
            <Nav/>
            <h1>Login Screen</h1>
            <div className="mt-2">
                <label className="form-label">Username</label>
                <input className="form-control" type="text" value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="mt-2">
                <label className="form-label">Password</label>
                <input className="form-control" type="password" value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleLogin}>
            Login
            </button>
        </div>
    );
};
export default LoginScreen;