import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "white",
    marginRight: "1rem",
    textDecoration: "none"
  };

  return (
    <nav style={{ padding: "1rem", background: "#111" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/register" style={linkStyle}>Register</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
    </nav>
  );
}

export default Navbar;