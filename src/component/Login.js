"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const SimpleLoginPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");

    if (nickname.trim() === "") {
      setAuthError("Please enter your Ranger Name");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4000/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname }),
      });

      const result = await response.json();

      if (response.ok) {
        // Authentication successful
        localStorage.setItem("userNickname", nickname);
        navigate("/age12"); // Always redirect to age12 page
      } else {
        // Authentication failed
        console.error("Authentication failed:", result.message);
        setAuthError(result.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Error during nickname authentication:", error);
      setAuthError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay"></div>
      <div className="login-content">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>
              Time to Explore the Realm of Sashakt using your Identity as a
              Ranger
            </p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            {authError && <div className="error-message">{authError}</div>}

            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Ranger Name"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="form-control"
                autoComplete="off"
              />
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Joining..." : "JOIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleLoginPage;
