import React from 'react';
import './Jelly.css';

const Jelly = ({ buttonText }) => {
  return (
    <button className="jel">
      {buttonText}
    </button>
  );
};

export default Jelly;
