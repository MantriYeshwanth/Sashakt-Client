"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faQuestion,
  faGamepad,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "./MysteryBox.css";

const MysteryBox = () => {
  const options = ["Game", "Learning"];
  const [revealedOption, setRevealedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerConfetti = () => {
    // Simple animation effect
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const revealOption = () => {
    if (!isClicked && !isAnimating) {
      setIsAnimating(true);

      // Delay the actual reveal to allow for animation
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * options.length);
        setRevealedOption(options[randomIndex]);
        setIsClicked(true);
        triggerConfetti();
      }, 800);
    }
  };

  const isGameReady = revealedOption === "Game";
  const isLearningReady = revealedOption === "Learning";

  return (
    <div className={`mystery-box ${isAnimating ? "animating" : ""}`}>
      <div
        className={`box ${isClicked ? "clicked" : ""}`}
        onClick={revealOption}
      >
        {revealedOption ? (
          <div className="revealed-content">
            <FontAwesomeIcon
              icon={isGameReady ? faGamepad : faBook}
              className="revealed-icon"
            />
            <p className="revealed-option">{revealedOption}</p>
          </div>
        ) : (
          <div className="question-content">
            <FontAwesomeIcon icon={faQuestion} className="question-mark" />
            <FontAwesomeIcon icon={faGift} className="gift-icon" />
          </div>
        )}
      </div>

      {isClicked && (
        <div className="button-container">
          {isGameReady && (
            <Link to="/gaming" className="ready-button game-button">
              I am ready for the Game
            </Link>
          )}

          {isLearningReady && (
            <Link to="/learning" className="ready-button learning-button">
              I am ready for Learning
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default MysteryBox;
