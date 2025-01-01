import "./index.scss";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

function CheckAuth({ isAuthentication, children }) {
  return isAuthentication ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthentication, setIsAuthentication] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route
          path="/"
          element={
            <CheckAuth isAuthentication={isAuthentication}>
              <Navbar>
                <Home />
              </Navbar>
            </CheckAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
