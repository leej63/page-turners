import React from "react";
import Nav from "../../nav";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function LoginScreen() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleLogin = async () => {}
    return (
    <div className="login-container">
      <Nav />
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Enter your username"
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
              placeholder="Enter your password"
            />
          </div>
          <button className="btn btn-primary mt-3">Login</button>
          <div className="mt-2">
            <NavLink className="nav-link" activeClassName="active" exact to="/register">
                Don't have an account?    
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;