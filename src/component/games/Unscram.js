import React, { useState, useEffect } from "react";
import "./Unscram.css"; // Import external CSS file

const WordScramble = () => {
  const [wordObj, setWordObj] = useState({});
  const [scrambledWord, setScrambledWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);

  const wordsWithHints = [
    {
      word: "education",
      hint: "Every child has the right to go to school and learn.",
    },
    {
      word: "protection",
      hint: "Every child should be safe from harm and danger.",
    },
    {
      word: "health",
      hint: "Every child has the right to medical care and a healthy life.",
    },
    {
      word: "play",
      hint: "Every child should have time to have fun and enjoy games.",
    },
    {
      word: "family",
      hint:
        "Every child has the right to live with and be cared for by loved ones.",
    },
  ];

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    return wordsWithHints[randomIndex];
  };

  const scrambleWord = (word) => {
    const scrambled = word
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    setScrambledWord(scrambled);
  };

  const checkAnswer = () => {
    if (!userInput.trim()) {
      setMessage("Type in your guess first!");
    } else if (userInput.toLowerCase() === wordObj.word.toLowerCase()) {
      setMessage("Correct! Well done!");
      setScore(score + 1);
      setIncorrectAttempts(0); // Reset incorrect attempts on correct answer
      setButtonClicked(true); // Disable the Check button
    } else {
      setIncorrectAttempts(incorrectAttempts + 1);

      if (incorrectAttempts === 1) {
        setMessage(`Incorrect. One more attempt left!`);
      } else if (incorrectAttempts >= 2) {
        setMessage(`Incorrect again! The correct answer is: ${wordObj.word}`);
        setIncorrectAttempts(0); // Reset incorrect attempts after displaying answer
      } else {
        setMessage("Incorrect. Try again!");
      }
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!buttonClicked) {
      checkAnswer();
    }
  };

  const handleNextWord = () => {
    setButtonClicked(false); // Re-enable the check button for next attempt
    const randomWordObj = chooseRandomWord();
    setWordObj(randomWordObj);
    scrambleWord(randomWordObj.word);
    setMessage("");
    setUserInput("");
  };

  useEffect(() => {
    const randomWordObj = chooseRandomWord();
    setWordObj(randomWordObj);
    scrambleWord(randomWordObj.word);
  }, []);

  return (
    <div className="word-scramble">
      <h2>Unscramble the Word</h2>
      <p className="hint">Hint: {wordObj.hint}</p>
      <p className="scrambled-word">Scrambled Word: {scrambledWord}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Guess:
          <input type="text" value={userInput} onChange={handleInputChange} />
        </label>
        <button type="submit">Check</button>
      </form>
      <p className="message">{message}</p>
      {message && (
        <div>
          <p className="score">Score: {score}</p>
          <button onClick={handleNextWord}>Next Word</button>
        </div>
      )}
    </div>
  );
};

export default WordScramble;
