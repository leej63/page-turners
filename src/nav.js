import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Nav() {
    const { currentUser } = useSelector((state) => state.user);
    return (
    <nav className="nav nav-tabs mb-2">
        <Link className="nav-link" to="/">Home</Link>
        {/* change to currentUser when done testing for profile page */}
        {!currentUser && <Link className="nav-link" to="/profile">Profile</Link>}
        {!currentUser && <Link className="nav-link" to="/register">Register</Link>}
        {!currentUser && <Link className="nav-link" to="/login">Login</Link>}
        <Link className="nav-link" to="/search">Search</Link>
        <Link className="nav-link" to="/details">Details</Link>
   </nav>
    )
}

export default Nav;