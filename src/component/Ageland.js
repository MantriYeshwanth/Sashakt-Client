"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jelly from "./buttonnss/Jelly";
import "./Ageland.css";

const Ageland = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    const inputValue = e.target.value;
    setAge(inputValue);
    setIsInvalid(!/^\d+$/.test(inputValue)); // Checks if the input contains only numbers
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username.trim()) {
      setErrorMessage("Please enter your Ranger Name");
      return;
    }

    if (isInvalid || !age) {
      setErrorMessage("Please enter a valid age (numbers only)");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, age }),
      });

      if (response.ok) {
        console.log("Data inserted successfully");
        localStorage.setItem("userNickname", username);
        // Always redirect to age12 page regardless of age
        navigate("/age12");
      } else {
        const data = await response.json();
        console.error("Failed to insert data:", data.message);
        setErrorMessage(
          data.message || "Failed to save data. Please try again."
        );
      }
    } catch (error) {
      console.error("Error occurred while sending data", error);
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ageland-container">
      <div className="ageland-background"></div>
      <div className="ageland-content">
        <div className="ageland-header">
          <h1>Take your empowerment to the max</h1>
          <h3>Welcome to Sashakt. It's a pleasure having you with us!</h3>
          <h4>Start your Empowerment journey with us as a Ranger</h4>
        </div>

        <div className="ageland-form-container">
          {errorMessage && <div className="ageland-error">{errorMessage}</div>}

          <form id="ageForm" className="ageland-form" onSubmit={submitHandler}>
            <input
              type="text"
              id="username"
              autoComplete="off"
              placeholder="Ranger Name"
              className="ageland-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              className={`ageland-input ${isInvalid ? "invalid" : ""}`}
              id="agefield"
              pattern="\d+"
              placeholder="Ranger Age"
              autoComplete="off"
              value={age}
              onChange={changeHandler}
              title="Numbers only"
            />

            <div className="ageland-button-container">
              <Jelly
                buttonText={isLoading ? "Joining..." : "JOIN"}
                onClick={submitHandler}
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ageland;
