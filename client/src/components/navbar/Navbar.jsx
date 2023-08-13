import "./navbar.css";
import { Link,  useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/login");
  }
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleClic=()=>{
    navigate("/register");
  }
  const handleHome=()=>{
    dispatch({ type: "LOGOUT" });
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">SmartBooking</span>
        </Link>
        {user ?  
        ( 
          <div>
            <button className="navButton" onClick={handleHome}>Logout</button>
            </div>
         ) 
         : (
          <div className="navItems">
            <button className="navButton" onClick={handleClic} >Register</button>
            <button className="navButton" onClick={handleClick} >Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;