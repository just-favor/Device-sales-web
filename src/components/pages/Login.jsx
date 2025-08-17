import React, { useState, useContext } from "react";
import "./Login.css";
import { UserContext } from "../../context/Usercontext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleForm = () => setIsSignup((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputUsername); // Save to context
    navigate("/"); // Go back to home after login
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input
            type="text"
            placeholder="User-Name"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
          <input type="password" placeholder="Password" required />
          {isSignup && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p onClick={toggleForm} className="toggle-text">
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
}

export default Login;
