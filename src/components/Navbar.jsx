import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="#">Profile</Link>
          <Link to="#">Sign Out</Link>
        </ul>
      </div>
      {children}
    </>
  );
};

export default Navbar;
