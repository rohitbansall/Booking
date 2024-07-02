import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">AshuBooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            
            <button className="navButton"> <Link to="/login">Login</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};
<button className="navButton"><Link to="/register">Register</Link></button>

export default Navbar;
