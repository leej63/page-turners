import React from "react";
import Nav from "../../nav";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";


function LoginScreen() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleLogin = async () => {}
    return (
        <div>
            <Nav/>
            <h1>Login Screen</h1>
            <div className="mt-2">
                <label className="form-label">Username</label>
                <input className="form-control" type="text"/>
            </div>
            <div className="mt-2">
                <label className="form-label">Password</label>
                <input className="form-control" type="password"/>
            </div>
            <button className="btn btn-primary mt-2">
            Login
            </button>
        </div>
    );
};
export default LoginScreen;