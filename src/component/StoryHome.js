import React from 'react';
import { Link } from 'react-router-dom';
import './StoryHome.css';

function StoryHome() {
  return (
    <div className="Home" >
      <h1 className="Header">Welcome, Kid!</h1>
      <p>Click the button below to watch a video and attempt the quiz.<br></br>
       STORY DISCRIPTION:<br></br>......<br></br>.....<br></br>.....<br></br>.....<br></br>.....</p>
      <Link to="/video" className="Button">Watch Story</Link>
    </div>
  );
}

export default StoryHome;