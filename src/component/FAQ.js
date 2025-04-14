"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css";

const NoResultsMessage = () => (
  <div className="faq-no-results">
    <p className="faq-oops">
      Oops! It seems like we couldn't find any results matching your search.{" "}
      <br />
      Don't worry, try refining your query or ask us another question.
    </p>
  </div>
);

const SearchContainer = ({ searchQuery, setSearchQuery }) => (
  <div className="faq-input-container">
    <input
      type="text"
      name="text"
      className="faq-input"
      placeholder="Unlock the mysteries 🔓"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <span className="faq-icon">
      <FontAwesomeIcon icon={faSearch} />
    </span>
  </div>
);

const FaqComponent = () => {
  const [showText, setShowText] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAnswer = (index) => {
    setShowText((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How can my child benefit from using Sashakt?",
      answer:
        "Using Sashakt, your child can benefit by engaging in educational games and interactive stories that promote learning about child rights. ",
    },
    {
      question: "Are the games and stories age-appropriate for children?",
      answer:
        "All games and stories on Sashakt are carefully designed to be age-appropriate.",
    },
    {
      question: "What age range is Sashakt designed for?",
      answer:
        "Sashakt is designed to cater to a diverse age range, offering content suitable for children across various developmental stages. .",
    },
    {
      question: "How can I contact support if I encounter issues?",
      answer:
        "For any support or assistance, you can reach out to our dedicated support team through the contact details provided on the Sashakt platform..",
    },
    {
      question: "Can I track my child's progress and achievements?",
      answer:
        "Yes, Sashakt offers a feature that allows parents to track their child's progress and achievements",
    },
    {
      question: "What is the main goal of the child empowerment platform?",
      answer:
        "The main goal is to create a fun, interactive, and engaging gamified platform that educates children in India about their rights and empowers them to stand up for themselves and others.",
    },
    {
      question: " How does the platform educate children about their rights?",
      answer:
        "The platform uses gamification techniques to provide information on children's rights in an enjoyable and interactive way, making the learning process engaging and memorable.",
    },
    {
      question:
        "Who is the target audience for the child empowerment platform?",
      answer:
        "The platform is intended for children between the ages of 8 and 16, and it is designed to be inclusive and accessible to all children, regardless of their socio-economic background, gender, or other demographic factors.",
    },
    {
      question: "Are there specific features that make the platform inclusive?",
      answer:
        "Yes, the platform is designed to be inclusive by considering the diverse needs of children. It ensures accessibility and provides content that resonates with children from various backgrounds.",
    },
    {
      question:
        "How can children actively participate and stand up for themselves on the platform?",
      answer:
        "Children can actively engage with the platform by participating in interactive games, quizzes, and challenges that empower them with knowledge and skills to stand up for their rights and the rights of others.",
    },
    {
      question:
        "What topics on children's rights are covered in the platform's content?",
      answer:
        "The platform covers a wide range of topics, including but not limited to, the right to education, protection from exploitation, freedom of expression, and the importance of diversity and inclusion.",
    },
    {
      question:
        "How is the platform designed to be both entertaining and educational?",
      answer:
        "The platform incorporates gamification elements such as interactive storytelling, challenges, and rewards, making the learning experience entertaining while delivering valuable educational content.",
    },
    {
      question:
        "Can parents or guardians monitor their child's progress on the platform?",
      answer:
        "Yes, parents or guardians can access a dashboard to monitor their child's progress, track learning achievements, and ensure a safe and positive online experience.",
    },
    {
      question: "Is the platform available in multiple languages?",
      answer:
        "Yes, the platform is designed to be multilingual, ensuring that children from diverse linguistic backgrounds can access and benefit from the educational content.",
    },
    {
      question: "How does the platform address online safety for children?",
      answer:
        "The platform implements strict measures to ensure online safety, including age-appropriate content, secure user authentication, and moderation to create a safe and positive online environment.",
    },
    {
      question:
        "Are there real-life scenarios incorporated into the platform's activities?",
      answer:
        "Yes, the platform integrates real-life scenarios and case studies to help children relate their learning to practical situations, fostering a deeper understanding of their rights and responsibilities.",
    },
    {
      question:
        "What support resources are available for children facing challenges?",
      answer:
        "The platform provides access to support resources, including helplines and counseling services, to assist children facing challenges and guide them on how to seek help in real-life situations.",
    },
    {
      question: "How does the platform encourage collaboration among children?",
      answer:
        "The platform includes collaborative activities, group challenges, and forums where children can interact, share experiences, and work together, fostering a sense of community and mutual empowerment.",
    },
    {
      question:
        "Can teachers integrate the platform into their educational curriculum?",
      answer:
        "Yes, teachers can integrate the platform into their curriculum as a supplementary educational tool, promoting the importance of children's rights and empowerment in the classroom.",
    },
    {
      question:
        "How does the platform adapt to the individual learning needs of each child?",
      answer:
        "The platform employs adaptive learning technologies to tailor content and challenges based on each child's progress, ensuring a personalized and effective learning experience.",
    },
  ];

  const filteredFaqData = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="faq-background"></div>
      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <SearchContainer
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <main className="faq-accordion">
          <div className="faq-accordion-content">
            {filteredFaqData.length === 0 ? (
              <NoResultsMessage />
            ) : (
              filteredFaqData.map((faq, index) => (
                <div
                  className={`faq-item ${index === showText ? "faq-show" : ""}`}
                  key={index}
                >
                  <div className="faq-question">
                    <h3 className="faq-question-title">{faq.question}</h3>
                    <button
                      className="faq-toggle-btn"
                      onClick={() => toggleAnswer(index)}
                    >
                      <span
                        className={`faq-icon-up ${
                          index === showText ? "faq-rotate" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faChevronUp} />
                      </span>
                      <span
                        className={`faq-icon-down ${
                          index !== showText ? "faq-rotate" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </button>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FaqComponent;
