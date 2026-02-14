import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
