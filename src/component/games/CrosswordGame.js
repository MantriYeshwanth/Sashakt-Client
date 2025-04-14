import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import { Button } from "react-bootstrap";
import "./CrosswordGame.css"; // Import CSS for styling

const CrosswordGame = () => {
  const [showCrossword, setShowCrossword] = useState(false);

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
    <div className="crossword-game-container">
      {/* Instruction Paragraph */}
      <div className="instruction-section">
        <h2>Understanding Nutrition & Healthcare</h2>
        <p>
          Good nutrition and healthcare are essential for a healthy life. Eating
          a balanced diet, getting enough sleep, and regular exercise help in
          maintaining overall well-being. Society plays a crucial role in
          ensuring that everyone has access to proper healthcare and nutritious
          food. Let's test your knowledge with a crossword puzzle!
        </p>
        <Button className="start-btn" onClick={() => setShowCrossword(true)}>
          Start Game
        </Button>
      </div>

      {/* Crossword Section - Appears only after clicking "Start Game" */}
      {showCrossword && (
        <div className="crossword-container">
          <Crossword data={crosswordData} />
        </div>
      )}
    </div>
  );
};

export default CrosswordGame;
