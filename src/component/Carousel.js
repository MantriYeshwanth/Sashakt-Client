"use client";

import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  // const [player, setPlayer] = useState(null);
  const [isManualControl, setIsManualControl] = useState(false);
  const changeTime = 5; // seconds

  const slides = [
    {
      type: "image",
      src: "/carouselimg/1.jpg",
      caption: "Realization of Rights",
    },
    {
      type: "image",
      src: "/carouselimg/2.jpg",
      caption: "Right to Education Act",
    },
    {
      type: "image",
      src: "/carouselimg/3.jpg",
      caption: "Right to Participation",
    },
    {
      type: "image",
      src: "/carouselimg/4.jpg",
      caption: "Protection from Child Labour",
    },
    {
      type: "image",
      src: "/carouselimg/5.jpg",
      caption: "Protection from Exploitation and Trafficking",
    },
    {
      type: "image",
      src: "/carouselimg/6.jpg",
      caption: "Right against Discrimination",
    },
    { type: "image", src: "/carouselimg/7.jpg", caption: "Right to equality" },
    {
      type: "image",
      src: "/carouselimg/8.jpg",
      caption: "Right to Nutrition and Healthcare",
    },
    {
      type: "image",
      src: "/carouselimg/9.jpg",
      caption: "Respect for the child views",
    },
    {
      type: "image",
      src: "/carouselimg/10.jpg",
      caption: "Special Provisions for Vulnerable Children",
    },
    { type: "video", caption: "Learn More About Children's Rights" },
  ];

  useEffect(() => {
    let interval;

    if (!isManualControl) {
      interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, changeTime * 1000);
    }

    return () => clearInterval(interval);
  }, [isManualControl, slides.length]);

  const handleManualChange = (index) => {
    setSlideIndex(index);
    setIsManualControl(true);

    // Re-enable autoplay after 30s
    setTimeout(() => setIsManualControl(false), 30000);
  };

  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      start: 26,
      end: 177,
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      disablekb: 1,
    },
  };

  // const handleReady = (event) => {
  //   setPlayer(event.target);
  // };

  const handleStateChange = (event) => {
    if (event.data === 0) {
      setIsManualControl(false);
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Children's Rights</h2>
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === slideIndex ? "active" : ""}`}
          >
            {slide.type === "image" ? (
              <img src={slide.src} alt={slide.caption} />
            ) : (
              <YouTube
                videoId="aJoGct2vJrI"
                opts={opts}
                // onReady={handleReady}
                onStateChange={handleStateChange}
              />
            )}
            <div className="caption">{slide.caption}</div>
          </div>
        ))}

        <button
          className="nav-button prev"
          onClick={() =>
            handleManualChange((slideIndex - 1 + slides.length) % slides.length)
          }
        >
          &#10094;
        </button>
        <button
          className="nav-button next"
          onClick={() => handleManualChange((slideIndex + 1) % slides.length)}
        >
          &#10095;
        </button>

        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? "active" : ""}`}
              onClick={() => handleManualChange(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
