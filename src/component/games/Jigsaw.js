import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import Modal from "react-modal";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./Jigsaw.css";

Modal.setAppElement("#root");

const Jigsaw = () => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [customMessage, setCustomMessage] = useState("");

  const difficultyLevels = [
    { rows: 2, columns: 2 },
    { rows: 3, columns: 3 },
    { rows: 3, columns: 4 },
  ];

  const images = [
    {
      src: "./carouselimg/2ndjig.jpg",
      customMessage: "Superheroes come in all forms!",
    },
    {
      src: "./carouselimg/3rdjig.jpg",
      customMessage: "Diversity is our strength!",
    },
    {
      src: "./carouselimg/4thjig.jpg",
      customMessage: "Equality makes the world brighter!",
    },
  ];

  const handleNextLevel = () => {
    if (currentLevel < difficultyLevels.length) {
      const nextLevel = currentLevel + 1;
      setCurrentLevel(nextLevel);
      setRows(difficultyLevels[nextLevel - 1].rows);
      setColumns(difficultyLevels[nextLevel - 1].columns);
      setIsPuzzleSolved(false);
      setCustomMessage(images[nextLevel - 1]?.customMessage || "");
      setScore(score + 5);
    }
  };

  return (
    <div className="jigsaw-game">
      <div className="jigsaw-container">
        {/* Puzzle Section */}
        <div className="jigsaw-puzzle">
          <JigsawPuzzle
            imageSrc={images[currentLevel - 1]?.src}
            rows={rows}
            columns={columns}
            onSolved={() => setIsPuzzleSolved(true)}
          />
        </div>

        {/* Reference Image and Score */}
        <div className="jigsaw-sidebar">
          <img
            src={images[currentLevel - 1]?.src}
            alt="Reference"
            className="reference-image"
          />
          <h5 className="score-text">Score: {score}</h5>
        </div>
      </div>

      {/* Modal for Congratulations */}
      <Modal
        isOpen={isPuzzleSolved}
        onRequestClose={() => setIsPuzzleSolved(false)}
        className="jigsaw-modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h5>{customMessage || "Congrats! You solved the puzzle!"}</h5>
          {currentLevel < difficultyLevels.length ? (
            <button onClick={handleNextLevel} className="next-button">
              Next
            </button>
          ) : (
            <button
              onClick={() => setIsPuzzleSolved(false)}
              className="close-button"
            >
              Close
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Jigsaw;
