import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { TheamContext, UserContext } from "../App";
import { TbSunMoon } from "react-icons/tb";

const Navbar = ({ children }) => {
  const { setSetCurrentUser } = useContext(UserContext);
  const { theam, setTheam } = useContext(TheamContext);
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
  console.log(theam);
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="#" onClick={setTheam("dark")}>
            <TbSunMoon />
          </Link>
          <Link to="#" onClick={handleLogout}>
            Sign Out
          </Link>
        </ul>
      </div>
      <div className={theam}>{children}</div>
    </>
  );
};

export default Navbar;
