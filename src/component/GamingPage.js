import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Glass from "./buttonnss/Glass";
import "./GamingPage.css"; // Move styles to an external CSS file

const GamingPage = () => {
  useEffect(() => {
    // Prevent scrolling on this page
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="gaming-page">
      {/* Background image is handled via CSS */}
      <div className="backgroundimg"></div>

      <div className="button-container">
        <div className="button-line">
          <Link to="/jigsaw" className="game-link">
            <Glass buttonText="Piece Craft" />
          </Link>
          <Link to="/Crossword" className="game-link">
            <Glass buttonText="Enigma" />
          </Link>
          <Link to="/card" className="game-link">
            <Glass buttonText="Match Master" />
          </Link>
        </div>

        <div className="button-line">
          <Link to="/unscram" className="game-link">
            <Glass buttonText="Unscramble" />
          </Link>
          <Link to="/board" className="game-link">
            <Glass buttonText="Freedom Quest" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamingPage;
