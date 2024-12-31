import { useState } from "react";

const Register = () => {
  const [error, setError] = useState(false);
  return (
    <>
      <div className="register">
        <form>
          {error && (
            <span className="error">
              {" "}
              Already created account with this email....
            </span>
          )}

          <input type="email" required placeholder="Enter Email" />
          <input type="password" required placeholder="Enter you password" />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account ? <span>Click here</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
