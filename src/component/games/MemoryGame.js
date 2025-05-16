import React, { useEffect, useState } from "react";
import "./MemoryGame.css";

const cardImages = [
  {
    src: "/images/child-labour1.png",
    matched: false,
    question: "What does this image represent?",
    options: ["Child Labor", "Education", "Play"],
    correctOption: "Child Labor",
  },
  {
    src: "/images/help_old1.png",
    matched: false,
    question: "What is the theme of this image?",
    options: ["Old Age Support", "Healthcare", "Charity"],
    correctOption: "Old Age Support",
  },
  {
    src: "/images/play.png",
    matched: false,
    question: "What does this image represent?",
    options: ["Child Labor", "Education", "Children should play"],
    correctOption: "Children should play",
  },
  {
    src: "/images/domes_voi.png",
    matched: false,
    question: "What does this image represent?",
    options: ["Child Labor", "Education", "Domestic Violence"],
    correctOption: "Domestic Violence",
  },
  {
    src: "/images/edu1.png",
    matched: false,
    question: "What does this image represent?",
    options: ["Mobile addiction", "Education", "Play"],
    correctOption: "Education",
  },
  {
    src: "/images/mobile_add.png",
    matched: false,
    question: "What does this image represent?",
    options: ["Healthcare", "Mobile addiction", "Play"],
    correctOption: "Mobile addiction",
  },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  // 🔹 Shuffle cards and reset game state
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), flipped: false }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setScore(0);
    setGameCompleted(false);
  };

  // 🔹 Handle card selection
  const handleChoice = (card) => {
    if (!card.flipped && !disabled) {
      setCards((prevCards) =>
        prevCards.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
      );

      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  // 🔹 Compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        setPopupVisible(true);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === choiceOne.id || card.id === choiceTwo.id
                ? { ...card, flipped: false }
                : card
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // 🔹 Reset choices & increment turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // 🔹 Handle answer selection
  const handleAnswer = (selectedOption, correctOption) => {
    if (selectedOption === correctOption) {
      setScore((prevScore) => prevScore + 10);
    } else {
      setScore((prevScore) => Math.max(prevScore - 5, 0));
    }
    setPopupVisible(false);
    resetTurn();
  };

  // 🔹 Check if game is completed
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameCompleted(true);
      setScore((prevScore) => prevScore + Math.max(100 - turns * 5, 0)); // Bonus for fewer turns
      setMaxScore((prevMax) => Math.max(prevMax, score));
    }
  }, [cards, turns]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="memory-game">
      <h1 className="game-title">
        {" "}
        <b>Memory Game</b>
      </h1>
      <button onClick={shuffleCards} className="new-game">
        New Game
      </button>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Max Score: {maxScore}</p>
        <p>Turns: {turns}</p>
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""}`}
            onClick={() => handleChoice(card)}
          >
            <img
              className="card-image"
              src={card.flipped ? card.src : "/images/scratch.jpg"}
              alt="memory card"
            />
          </div>
        ))}
      </div>

      {popupVisible && choiceOne && (
        <div className="popup">
          <h2>{choiceOne.question}</h2>
          <div className="options">
            {choiceOne.options.map((option, index) => (
              <button
                key={index}
                className={option === choiceOne.correctOption ? "correct" : ""}
                onClick={() => handleAnswer(option, choiceOne.correctOption)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {gameCompleted && (
        <div className="game-completed">
          <h2>Congratulations! 🎉</h2>
          <p>Your final score: {score}</p>
        </div>
      )}
    </div>
  );
}
