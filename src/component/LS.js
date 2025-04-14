import React from "react";
import { Link } from "react-router-dom";
import Shine from "./buttonnss/Shine";

const LandingPage = () => {
  const containerStyle = {
    height: "100vh", // Adjust as needed
  };

  const imageContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -3,
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentContainerStyle = {
    position: "absolute",
    bottom: "170px", // Adjust as needed
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  };

  const LS = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyle = {
    textDecoration: "none",
    marginRight: "20px", // Adjust as needed to move the buttons more to the right
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      margin: "50px",
    },
    heading: {
      fontSize: "36px",
      marginBottom: "10px",
      textAlign: "center",
    },
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img src="/images/bade.jpg" alt="Your Image" style={imgStyle} />
        </div>
        <div style={contentContainerStyle}>
          <div style={styles.container}>
            <h1 style={styles.heading}>Take your empowerment to the max</h1>
            <h3
              style={{
                fontSize: "18px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Welcome to Sashakt. It's a pleasure having you with us!
            </h3>
            <h4 style={{ textAlign: "center" }}>
              {" "}
              Start your Empowerment journey with us as a Ranger
            </h4>
            <br />
            <div style={LS}>
              <Link to="/Login" style={{ ...buttonStyle }}>
                <Shine buttonText="Resume Journey" />
              </Link>
              <br />
              <Link to="/register" style={{ ...buttonStyle }}>
                <Shine buttonText="Start Adventure" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
