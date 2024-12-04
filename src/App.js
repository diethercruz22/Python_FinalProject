// App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"; // Import the Header component
import LandingPage from "./components/LandingPage"; // Landing Page
import Login from "./components/Login"; // Login Page
import SignUp from "./components/SignUp"; // SignUp Page
import MainPage from "./components/MainPage";

function App() {
  const location = useLocation(); // Get the current route location

return (
    <div>
      {/* Conditionally render the Header based on the current route */}
      {location.pathname !== "/" && location.pathname !== "/main" && <Header />} {/* Hide header on LandingPage and MainPage */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
