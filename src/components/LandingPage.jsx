import React from "react";
import { useNavigate } from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();

  return (
    
    <div>

      
      <div style={{textAlign:"center"}} >
        "A project management tool designed to boost team productivity and keep everyone on track."
      <h1 style={{color:"black", textShadow:"revert-layer",textAlign:"center"}}>Project Management Web Application</h1></div>

      <div style={{ textAlign: "center",margin:"1px" }}>
      <button  type="submit" className="button" onClick={() => navigate("/login")} style={{textAlign: "center", marginTop:"1px",marginRight: "100px"}}>
        Login
      </button>
      <button onClick={() => navigate("/signup")}>
        SignUp
      </button>
      </div>

    </div>
  );
}

export default LandingPage;
