import React from 'react';
import './Space.css'; // Assuming you have a CSS file named SpaceButton.css for the styles

const Space = () => {
  return (
    <button className="space" type="button">
      <strong>SPACE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default Space;
