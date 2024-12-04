import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css"; // Import the CSS file

function Login() {
  const [identifier, setIdentifier] = useState(""); // Holds either email or username
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle visibility
  const navigate = useNavigate(); // Used for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic here
    if (identifier && password) {
      const isEmail = identifier.includes("@");
      console.log(isEmail ? "Email detected" : "Username detected");
      console.log("Identifier (Email/Username):", identifier, "Password:", password);
      
      // Redirect to Main Page after successful login
      navigate("/main");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "30px", color: "black" }}>Log In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email or Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          className="input-field"
        />
        <br />
        <div style={{ position: "relative", display: "inline-block", width: "240px" }}>
          <input
            type={showPassword ? "text" : "password"} // Toggle password visibility
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <span
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "gray",
            }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <br />
        <button type="submit" className="button" style={{ marginTop: "30px" }}>
          Log in
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <a href="/forgot-password" style={{ color: "blue", textDecoration: "none" }}>
          Forgot Password?
        </a>
        <br />
        <span style={{ color: "black" }}>Not yet registered? </span>
        <a href="/signup" style={{ color: "blue", textDecoration: "none", marginTop: "10px" }}>
          Click here
        </a>
      </div>
    </div>
  );
}

export default Login;
