const Login = () => {
  return (
    <>
      <div className="login">
        <form>
          <input type="email" required placeholder="Enter Email" />
          <input type="password" required placeholder="Enter you password" />
          <button>Sign In</button>
          <p>
            Not have created any account ? <span>Click here</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
