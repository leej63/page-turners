import { NavLink } from "react-router-dom";
import "./nav.css"; 

function Nav() {
  return (
    <div>
      <header className="banner">
        <h1>Page Turner</h1>
      </header>
    <nav className="nav nav-tabs mb-2">
      <NavLink className="nav-link" activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/profile">
        Profile
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/register">
        Register
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/login">
        Login
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/search">
        Search
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/details">
        Details
      </NavLink>
    </nav>
    </div>
  );
}

export default Nav;