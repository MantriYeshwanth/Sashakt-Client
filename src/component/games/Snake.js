// Snake.js
import React, { useState, useEffect } from 'react';
import './Snake.css';

const gridSize = 20;

const Snake = () => {
  const initialSnake = [{ x: 0, y: 0 }];
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState(generateFoodPosition());
  const [score, setScore] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [isGamePaused, setIsGamePaused] = useState(false);

  // Function to generate random position for the food
  function generateFoodPosition() {
    return { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
  }

  // Function to generate a random question
  function generateQuestion() {
    const newQuestion = 'What is the capital of France?'; // Replace with your questions
    const newOptions = ['Paris', 'Berlin', 'Madrid', 'Rome']; // Replace with your options
    setQuestion(newQuestion);
    setOptions(newOptions);
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showQuestion) return; // Do not allow movement when the question is displayed

      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [showQuestion]);

  useEffect(() => {
    const moveSnake = () => {
      if (isGamePaused) return;

      const newSnake = [...snake];
      let head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y = (head.y - 1 + gridSize) % gridSize;
          break;
        case 'DOWN':
          head.y = (head.y + 1) % gridSize;
          break;
        case 'LEFT':
          head.x = (head.x - 1 + gridSize) % gridSize;
          break;
        case 'RIGHT':
          head.x = (head.x + 1) % gridSize;
          break;
        default:
          break;
      }

      newSnake.unshift(head);

      // Check if the snake has collided with the food
      if (head.x === food.x && head.y === food.y) {
        generateQuestion();
        setShowQuestion(true);
        setIsGamePaused(true);
        setFood(generateFoodPosition());
        newSnake.push({ ...head }); // Increase the length of the snake
        setScore(score + 1); // Increment the score
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(() => {
      moveSnake();
    }, 150);

    return () => clearInterval(gameInterval);
  }, [snake, direction, food, score, showQuestion, isGamePaused]);

  // Function to handle answering the question
  const handleAnswer = (selectedOption) => {
    // Handle the selected option here
    setShowQuestion(false);
    setIsGamePaused(false);
  };

  return (
    <div className='snake-container'>
      <div className="snake-game">
        <div className="score-card">Score: {score}</div>
        {snake.map((segment, index) => (
          <div
            key={index}
            className="snake-segment"
            style={{ gridRow: segment.y + 1, gridColumn: segment.x + 1 }}
          ></div>
        ))}
        <div
          className="food"
          style={{ gridRow: food.y + 1, gridColumn: food.x + 1 }}
        ></div>
        {showQuestion && (
          <div className="question-box">
            <div className="question">{question}</div>
            <div className="options">
              {options.map((option, index) => (
                <div key={index} className="option" onClick={() => handleAnswer(option)}>
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Snake;