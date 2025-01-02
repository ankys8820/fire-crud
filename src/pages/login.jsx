import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { UserContext } from "../App.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { currentUser, setSetCurrentUser } = useContext(UserContext);

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError(false);
        console.log(currentUser);
        setSetCurrentUser({ user: user, isAuth: true });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  }

  return (
    <>
      <div className="login">
        <form onSubmit={handleLogin}>
          {error && (
            <span className="error"> No user found with this email....</span>
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
          <button>Sign In</button>
          <p>
            Not have created any account ?{" "}
            <Link to="/register">Click here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
