import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav className="nav nav-tabs mb-2">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
        {/* <Link className="nav-link" to="#">Search</Link>
        <Link className="nav-link" to="#">Details</Link>
        <Link className="nav-link" to="#">Login</Link>
        <Link className="nav-link" to="#">Profile Details</Link> */}
   </nav>
    )
}

export default Nav;