import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Confetti from "react-confetti";
import Modal from "react-modal";

const segments = [
  { name: "Movie Time 🎬", message: "Watch a movie!", image: "movie.png" },
  {
    name: "Workout 💪",
    message: "Do a workout session!",
    image: "workout.png",
  },
  { name: "Read 📖", message: "Read a book!", image: "book.png" },
  { name: "Amaze Me 🌟", message: "Something surprising!", image: "amaze.png" },
];

const data = segments.map((segment) => ({ option: segment.name }));

const WheelApp = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * segments.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setWinner(segments[prizeNumber]);
    setModalOpen(true);
  };

  return (
    <div style={styles.container}>
      {winner && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      {/* Wheel & Button */}
      <div style={styles.wheelWrapper}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#f54291", "#4287f5", "#42f554", "#f5a742"]}
          textColors={["#fff"]}
          outerBorderColor="#000"
          onStopSpinning={handleStopSpinning}
          radiusLineColor="#000"
          outerBorderWidth={6}
          radiusLineWidth={2}
        />
        <button
          onClick={handleSpinClick}
          disabled={mustSpin}
          style={styles.spinButton}
        >
          Spin
        </button>
      </div>

      {/* Modal on Right Side */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Winner Modal"
        ariaHideApp={false}
        style={modalStyles}
      >
        <h2>{winner?.name}</h2>
        <p>{winner?.message}</p>
        {/* {winner?.image && (
          <img
            src={`/images/${winner.image}`}
            alt={winner.name}
            style={styles.modalImage}
          />
        )} */}
        <button style={styles.closeButton} onClick={() => setModalOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(148, 198, 234)",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
  },
  wheelWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    maxWidth: "400px",
  },
  spinButton: {
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
  closeButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  modalImage: {
    width: "150px",
    marginTop: "10px",
  },
};

// Move modal to the right side
const modalStyles = {
  content: {
    top: "50%",
    left: "80%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(161, 241, 220)",
    fontSize: "25px",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "90%",
    width: "400px",
    zIndex: 1000,
  },
};

export default WheelApp;
