import React from "react";
import PNavbar from "./ProjNavbar";

const Credits = () => {
    const containerStyle = {
        position: "relative",
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
        bottom: "40px",  // Adjust as needed
        left: "15px",
        right: 0,
        zIndex: 2,
        // padding: "2px",  // Add padding to avoid overlap with the navbar
        color: "#fff",  // Optional: Set text color
    };

    return (
        <div style={containerStyle}>
            <div style={imageContainerStyle}>
                <img src="/images/bade.jpg" alt="Your Image" style={imgStyle} />
            </div>
            <div style={contentContainerStyle}>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We extend our heartfelt gratitude to all the contributors, testers, and advisors who played pivotal roles in refining our platform.</h3> <br/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kudos to the Ministry of Law and Justice for providing this challenging problem statement that fueled our project's innovation. We're grateful for the support of our Mentor Ms. Sireesha Puppala and appreciate her expertise. Special thanks to our supportive families whose encouragement and testing played a key role in refining our project. This platform wouldn't be possible without the collective efforts of these individuals, organizations and our 6 honorable developers.</h3> <br/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for being a part of our journey to make our Platform a truly enriching experience for all.</h3> <br/>
            </div>
        </div>
    );
}

export default Credits;
