"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const NicknameGenerator = () => {
  const [childName, setChildName] = useState("");
  const [cartoonCharacter, setCartoonCharacter] = useState("");
  const [age, setAge] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (!childName || !cartoonCharacter || !age) {
      setErrorMessage("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    const nameWithoutSpaces = childName.replace(/\s/g, "");
    const firstThreeChars = nameWithoutSpaces.slice(0, 3).toLowerCase();
    const cartoonFirstThreeChars = cartoonCharacter.slice(0, 3).toLowerCase();
    const generatedNickname = `${firstThreeChars}${cartoonFirstThreeChars}${age}`;

    try {
      // const response = await fetch("http://localhost:4000/users", {
        const response = await fetch("https://sashakt-backend-lj9s.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: childName,
          cartoon: cartoonCharacter,
          age: age,
          nickname: generatedNickname,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setNickname(generatedNickname);
        setLoggedIn(true);
        // Store the nickname in localStorage for future use
        localStorage.setItem("userNickname", generatedNickname);
      } else {
        if (responseData.message) {
          setErrorMessage(responseData.message);
        } else {
          setErrorMessage("Failed to save user data. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-overlay"></div>
      <div className="signup-content">
        {!isLoggedIn ? (
          <div className="signup-form-container">
            <div className="signup-header">
              <h2>Join Sashakt</h2>
              <p>✨ Let's get started by filling in the details below.</p>
            </div>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <form onSubmit={handleLogin} className="signup-form">
              <div className="form-group">
                <label htmlFor="childName">Your name</label>
                <input
                  type="text"
                  id="childName"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cartoonCharacter">
                  Favorite Cartoon Character
                </label>
                <input
                  type="text"
                  id="cartoonCharacter"
                  value={cartoonCharacter}
                  onChange={(e) => setCartoonCharacter(e.target.value)}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="8"
                  max="16"
                  required
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                className="signup-button"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Surprise!"}
              </button>
            </form>
          </div>
        ) : (
          <div className="welcome-container">
            <div className="welcome-header">
              <h2>Welcome, Ranger!</h2>
            </div>
            <div className="welcome-content">
              <h3>Hey there!</h3>
              <p>
                Now that you've stepped into this enchanted realm you will
                discover your new identity as a Ranger with a unique name!
              </p>
              <p className="nickname">{nickname}</p>

              <Link to="/age12">
                <button className="adventure-button">Start Adventure</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NicknameGenerator;
