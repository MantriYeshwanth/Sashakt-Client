import React, { useState } from "react";
import ScratchCard from "react-scratchcard";
import { Button } from "react-bootstrap";
import Crossword from "@jaredreisinger/react-crossword";
import "./Scratchcard.css"; // Import the new CSS file

const Scratchcard = () => {
  const [showCrossword, setShowCrossword] = useState(false);
  const [cardScratched, setCardScratched] = useState(false);

  const scratchCardSettings = {
    width: 350,
    height: 350,
    image: "/images/scratch.jpg", // Make sure this file exists!
    finishPercent: 70,
    onComplete: () => setCardScratched(true),
  };

  const nutritionMessage = (
    <div className="scratch-content">
      <h3>Healthy Eating</h3>
      <p>
        Eating nutritious food helps your body stay strong and your mind stay
        sharp!
      </p>
      <p>
        Always include fresh fruits, vegetables, proteins, and lots of water in
        your diet.
      </p>
    </div>
  );

  const crosswordData = {
    across: {
      1: {
        clue: "Who ensures fulfillment of rights?",
        answer: "SOCIETY",
        row: 6,
        col: 0,
      },
      2: {
        clue: "Healthcare is essential for physical & _____ development",
        answer: "MENTAL",
        row: 2,
        col: 2,
      },
      3: {
        clue: "This right recognizes nutrition and healthcare (Yes or No)",
        answer: "YES",
        row: 1,
        col: 5,
      },
    },
    down: {
      5: {
        clue: "This right enables individuals to lead _____ lives",
        answer: "HEALTHY",
        row: 0,
        col: 6,
      },
      6: {
        clue: "What is encompassed by the right to nutrition?",
        answer: "FOOD",
        row: 4,
        col: 1,
      },
    },
  };

  return (
    <div className="scratchcard-container">
      {/* Left Side - Scratch Card */}
      <div className="scratch-section">
        <ScratchCard {...scratchCardSettings}>
          <div className="scratch-message">{nutritionMessage}</div>
        </ScratchCard>
      </div>

      {/* Right Side - Game Section */}
      <div className="game-section">
        {cardScratched && (
          <div className="game-content">
            <Button
              className="start-btn"
              onClick={() => setShowCrossword(true)}
            >
              Start Crossword
            </Button>
          </div>
        )}

        {showCrossword && (
          <div className="crossword-container">
            <Crossword data={crosswordData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Scratchcard;
