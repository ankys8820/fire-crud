import "./index.scss";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

function CheckAuth({ isAuthentication, children }) {
  return isAuthentication ? children : <Navigate to="/login" />;
}

const UserContext = createContext();
const TheamContext = createContext();
function App() {
  const [theam, setTheam] = useState("light");
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
        <TheamContext.Provider value={{ theam, setTheam }}>
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
        </TheamContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext, TheamContext };
