import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { UserContext } from "../App.jsx";

const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setSetCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setSetCurrentUser({ user: user, isAuth: true });
        navigate("/");
        setError(false);

        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(true);
      });
  };
  return (
    <>
      <div className="register">
        <form onSubmit={handleRegister}>
          {error && (
            <span className="error">
              {" "}
              Already created account with this email....
            </span>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter you password"
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account ? <Link to="/login">Click here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
