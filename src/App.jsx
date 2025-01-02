import "./index.scss";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { createContext, useState } from "react";

function CheckAuth({ isAuthentication, children }) {
  return isAuthentication ? children : <Navigate to="/login" />;
}

const UserContext = createContext();
function App() {
  const [currentUser, setSetCurrentUser] = useState({
    user: {},
    isAuth: false,
    name: "Ankit",
  });
  console.log(currentUser);
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
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
