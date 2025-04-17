import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

const VideoDisplay = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const fetchVideoUrl = async () => {
    try {
      const response = await fetch(
        "https://sashakt-backend-lj9s.onrender.com/videos"
      );
      if (response.ok) {
        const videoData = await response.json();
        setVideoUrl(videoData.url);
      } else {
        console.error(
          "Failed to fetch video URL. Response status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching video URL:", error);
    }
  };

  useEffect(() => {
    fetchVideoUrl();
  }, []);

  const extractVideoId = (url) => {
    // Extract the video ID from a YouTube URL
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return (match && match[1]) || "";
  };

  const embedUrl = `https://www.youtube.com/embed/${extractVideoId(videoUrl)}`;

  return (
    <div>
      <h2>Video Display</h2>
      {videoUrl ? (
        <div>
          {/* Embedded YouTube video using an iframe */}
          <iframe
            title="YouTube Video"
            width="600"
            height="400"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Button using Link to navigate to another component */}
          <Link to="/Login">
            <button>Next</button>
          </Link>
        </div>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoDisplay;
