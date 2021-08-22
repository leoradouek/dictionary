import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/backwards" className="navbar-item">
        Backwards
      </Link>
      <Link to="/definition" className="navbar-item">
        Definition
      </Link>
    </div>
  );
};

export default Navbar;
