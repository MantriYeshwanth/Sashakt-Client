import { Button } from 'react-bootstrap';

import ReactPlayer from 'react-player';
import React, { useRef,useState  } from 'react';
import { Link } from 'react-router-dom';
import './VideoPlayer.css';
const VIDEO_PATH = 'https://youtu.be/HCYLdtug8sk?si=kSXRNf-mxN6vEVQO&start=2&end=99';
function VideoPlayer() {
    const playerRef = useRef(null);
    const [showshow, setShowshow] = useState(true);


    const handleVideoEnd = () => {
        
        setShowshow(false);
    };

    const handleButtonClick = () => {
        
        // Your logic to navigate to the "Welcome to Quiz" page goes here
        // You can use React Router, conditional rendering, or other navigation methods.

    };
    return (
        <div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true}  onEnded={handleVideoEnd}/>
            </div>
            {!showshow &&  ((<Link to="/quiz" ><Button onClick={handleButtonClick} >start quiz </Button></Link>  ))}
        </div>
    )
};
export default VideoPlayer;