import "./index.scss";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Navigate, createContext, useEffect, useState } from "react";
import Profile from "./pages/profile";

const UserContext = createContext();

function App() {
  function CheckAuth({ isAuthentication, children }) {
    return isAuthentication ? children : <Navigate to="/login" />;
  }
  const [currentUser, setSetCurrentUser] = useState({
    user: JSON.parse(localStorage.getItem("user")) || {},
    isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
    name: "Ankit",
  });

  // # for refreshing the page
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser.user));
    localStorage.setItem("isAuth", currentUser.isAuth);
  }, [currentUser]);
  return (
    <>
      <UserContext.Provider value={{ currentUser, setSetCurrentUser }}>
        <Routes>
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login></Login>} />
          <Route
            path="/"
            element={
              <CheckAuth isAuthentication={currentUser.isAuth}>
                <Navbar>
                  <Home />
                </Navbar>
              </CheckAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <CheckAuth isAuthentication={currentUser.isAuth}>
                <Navbar>
                  <Profile />
                </Navbar>
              </CheckAuth>
            }
          />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
