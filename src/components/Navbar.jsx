import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = ({ children }) => {
  const { setSetCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setSetCurrentUser({ user: {}, isAuth: false });
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="#">Profile</Link>
          <Link to="#" onClick={handleLogout}>
            Sign Out
          </Link>
        </ul>
      </div>
      {children}
    </>
  );
};

export default Navbar;
