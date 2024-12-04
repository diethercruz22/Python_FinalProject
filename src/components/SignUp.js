import React, { useState } from "react";
import "../styles/App.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false); // Track checkbox state

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate successful signup
    console.log("Email:", email, "Username:", Username, "Password:", password);
    alert("Signup Successful!");
  };

  return (
    <div className="container-signup" style={{ textAlign: "center", position: "center" }}>
      <h2 style={{ color: "black" }}>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <br />
        <input
          type="text"
          placeholder="Enter Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="input-field"
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="input-field"
        />
        <br />
        
        {/* Terms and Conditions Checkbox */}
        <div style={{ marginTop: "15px" }}>
          <label style={{ fontSize: "14px" }}>
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)} // Toggle checkbox state
              required
            />
            &nbsp; I accept the&nbsp;
            <a href="/terms-and-conditions" style={{ color: "blue", textDecoration: "none" }}>
              Terms and Conditions
            </a>
          </label>
        </div>
        
        <br />
        
        {/* Disable button if terms are not accepted */}
        <button
          type="submit"
          style={{ margin: "10px" }}
          disabled={!acceptTerms} // Disable the button if terms are not accepted
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
