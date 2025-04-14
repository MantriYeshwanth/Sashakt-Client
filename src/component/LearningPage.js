"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./LearningPage.css";

const LearningPage = () => {
  const rightsData = [
    {
      name: "Know your Responsibilities",
      description:
        "It is very important for every child to realize his/her responsibilities first.",
      videoUrl: "https://www.youtube.com/embed/rs5FbuuzyqU",
    },
    {
      name: "Right to Education and opposing child labor",
      description:
        "Every child has the right to education go against child labor.",
      videoUrl: "https://www.youtube.com/embed/U6bBudEnSG4",
    },
    {
      name: "Right to Health",
      description:
        "Every child has the right to access healthcare and live a healthy life.",
      videoUrl: "https://www.youtube.com/embed/c06dTj0v0sM",
    },
    {
      name: "Right to Play",
      description:
        "Every child has the right to play and engage in recreational activities.",
      videoUrl: "https://www.youtube.com/embed/-dGjaTWF3KY",
    },
    {
      name: "Right to Protection",
      description: "Every child has the right to be protected.",
      videoUrl: "https://www.youtube.com/embed/zNTUMNKSNwk",
    },
    {
      name: "Right to Family",
      description:
        "Every child has the right to live with their family and be cared for.",
      videoUrl: "https://www.youtube.com/embed/your-video-id5", // Replace with valid URL
    },
  ];

  const allQuestions = [
    [
      {
        question:
          "What responsibilities do children have in their daily lives?",
        options: [
          "No responsibilities",
          "To help with household chores",
          "To complete homework on time",
          "To eat ice cream all day",
        ],
      },
      {
        question:
          "Why is it important for children to be aware of their rights?",
        options: [
          "It is not important",
          "To have fun",
          "To stay healthy",
          "To be treated fairly and respectfully",
        ],
      },
      {
        question:
          "How can knowing responsibilities contribute to a child's personal growth?",
        options: [
          "It doesn't contribute",
          "Increases laziness",
          "Promotes discipline and maturity",
          "Limits creativity",
        ],
      },
    ],
    [
      {
        question: "What challenges do children face in accessing education?",
        options: [
          "No challenges",
          "Lack of schools and resources",
          "Education is not important",
          "Too many schools to choose from",
        ],
      },
      {
        question: "How does child labor impact a child's right to education?",
        options: [
          "Child labor has no impact",
          "Promotes education",
          "Negatively affects education",
          "Child labor is essential for education",
        ],
      },
      {
        question:
          "What role can society play in ensuring every child's right to education?",
        options: [
          "Discourage education",
          "Promote child labor",
          "Provide access to quality education",
          "Encourage dropping out of school",
        ],
      },
    ],
    [
      {
        question: "What are the key aspects of a child's right to health?",
        options: [
          "Access to nutritious food and clean water",
          "Unlimited screen time",
          "Skipping meals",
          "Ignoring exercise",
        ],
      },
      {
        question: "How can children exercise their right to play?",
        options: [
          "By watching TV all day",
          "Engaging in outdoor activities and games",
          "Avoiding any physical activity",
          "Playing violent video games",
        ],
      },
      {
        question: "Why is the right to protection important for every child?",
        options: [
          "Protection limits freedom",
          "To ensure a safe and secure environment",
          "Children don't need protection",
          "Protection leads to laziness",
        ],
      },
    ],
    [
      {
        question: "What role does family play in a child's development?",
        options: [
          "Family is not important",
          "Provides emotional support and care",
          "Family restricts individuality",
          "Children should live alone",
        ],
      },
      {
        question: "How can society support the right to family?",
        options: [
          "By promoting separation",
          "Encouraging neglect",
          "Supporting family reunification and stability",
          "Discouraging family bonds",
        ],
      },
      {
        question: "Why is it crucial for children to live with their families?",
        options: [
          "Living alone is better",
          "Families hinder personal growth",
          "Families provide love and care",
          "Children should be on their own",
        ],
      },
    ],
    [
      {
        question:
          "What are the challenges faced by children in accessing education?",
        options: [
          "No challenges, education is easy to access",
          "Lack of schools and resources",
          "Children don't need education",
          "Education leads to boredom",
        ],
      },
      {
        question: "How does child labor impact a child's well-being?",
        options: [
          "Child labor is beneficial",
          "No impact on well-being",
          "Negatively affects physical and mental health",
          "Child labor leads to happiness",
        ],
      },
      {
        question:
          "In what ways can communities promote the right to education?",
        options: [
          "By discouraging education",
          "Promoting child labor",
          "Ensuring access to quality schools and resources",
          "Encouraging dropout",
        ],
      },
    ],
    [
      {
        question: "How can communities support the right to play for children?",
        options: [
          "By restricting playtime",
          "Promoting indoor activities only",
          "Providing safe and accessible play areas",
          "Children don't need to play",
        ],
      },
      {
        question:
          "What are the benefits of recreational activities for a child's development?",
        options: [
          "Recreational activities have no benefits",
          "Promotes physical and mental well-being",
          "Increases boredom",
          "Children should only study",
        ],
      },
      {
        question:
          "Why should children have the right to participate in decision-making processes?",
        options: [
          "Children should not participate in decision-making",
          "Promotes independence and responsibility",
          "No need for opinions",
          "Adults know best",
        ],
      },
    ],
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const openVideo = (videoUrl, index) => {
    setSelectedVideo(videoUrl);
    setCurrentVideoIndex(index);
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(allQuestions[index].length).fill(null));
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setShowQuiz(true);
    setCurrentQuestionIndex(0);
  };

  const handleOptionSelect = (optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz = () => {
    setSelectedVideo(null);
    setCurrentVideoIndex(null);
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
  };

  return (
    <div className="learning-page">
      <div className="learning-background"></div>
      <div className="learning-container">
        <h2 className="learning-title">Child Rights</h2>
        <div className="learning-rights-grid">
          {rightsData.map((right, index) => (
            <div key={index} className="learning-card">
              <h3 className="learning-card-title">{right.name}</h3>
              <p className="learning-card-description">{right.description}</p>
              <button
                className="learning-button"
                onClick={() => openVideo(right.videoUrl, index)}
              >
                Watch Video
              </button>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="learning-modal">
            <div className="learning-modal-content">
              <div className="learning-video-container">
                <iframe
                  title="Selected Video"
                  width="100%"
                  height="315"
                  src={selectedVideo}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                className="learning-button learning-close-button"
                onClick={closeVideo}
              >
                Close Video
              </button>
            </div>
          </div>
        )}

        {showQuiz && currentVideoIndex !== null && (
          <div className="learning-modal">
            <div className="learning-modal-content learning-quiz-container">
              <h2 className="learning-quiz-title">Quiz</h2>
              {allQuestions[currentVideoIndex].map(
                (question, qIndex) =>
                  qIndex === currentQuestionIndex && (
                    <div key={qIndex} className="learning-question">
                      <p className="learning-question-text">
                        {question.question}
                      </p>
                      <ul className="learning-options-list">
                        {question.options.map((option, oIndex) => (
                          <li key={oIndex} className="learning-option-item">
                            <label className="learning-option-label">
                              <input
                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                value={oIndex}
                                checked={
                                  selectedOptions[currentQuestionIndex] ===
                                  oIndex
                                }
                                onChange={() => handleOptionSelect(oIndex)}
                                className="learning-option-input"
                              />
                              <span className="learning-option-text">
                                {option}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                      <div className="learning-quiz-buttons">
                        {currentQuestionIndex ===
                        allQuestions[currentVideoIndex].length - 1 ? (
                          <Link
                            className="learning-button learning-finish-button"
                            onClick={handleFinishQuiz}
                            to="/learning"
                          >
                            Finished
                          </Link>
                        ) : (
                          <button
                            className="learning-button learning-next-button"
                            onClick={handleNextQuestion}
                          >
                            Next
                          </button>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPage;
