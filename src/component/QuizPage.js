import React, { useState } from 'react';
import './QuizPage.css';

function QuizPage() {
  const questions = [
    {
      question: 'What was the video about...?',
      options: [' Child labour  ', 'Stranger safety', '   Safe Touch  '],
      correctAnswer: 'Stranger safety',
    },
    {
      question: 'Would You take any offerings from a stranger?',
      options: ['No', 'Yes', 'Only If I like it'],
      correctAnswer: 'No',
    },
    {
      question: 'Question 3?',
      options: ['option a', 'option b', 'option c'],
      correctAnswer: 'option a',
    },
    {
      question: 'Question 4?',
      options: ['option a', 'option b', 'option c'],
      correctAnswer: 'option a',
    },
    {
      question: 'Question no 5?',
      options: ['option a', 'option b', 'option c'],
      correctAnswer: 'option a',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [quizOver, setQuizOver] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentCorrectAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === currentCorrectAnswer) {
      setScore(score + 1);
      setAnsweredCorrectly(true);
    } else {
      setAnsweredCorrectly(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnsweredCorrectly(null);
    } else {
      setQuizOver(true);
    }
  };

  return (

    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="content text-center text-white">
      <div className="QuizPage">
      <h1 className='QP'>Quiz Page</h1>
      {quizOver ? (
        <div>
          <p className="quiz-over">Quiz is over! Your score: {score} out of {questions.length}</p>
        </div>
      ) : (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleAnswer(option)}
                  disabled={answeredCorrectly !== null}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {answeredCorrectly !== null && (
            <p className={answeredCorrectly ? 'correct' : 'incorrect'}>
              {answeredCorrectly ? 'Correct!' : 'Incorrect!'}
            </p>
          )}
          {answeredCorrectly !== null && (
            <button onClick={handleNextQuestion}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          )}
        </div>
      )}
    </div>
      </div>
    </div>


  );
}


export default QuizPage;