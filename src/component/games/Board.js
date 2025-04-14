"use client";

import React, { createRef } from "react";
import "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalNodes: 5,
      currentNodePosition: 0,
      board: [],
      gameOver: false,
      showPopup: false,
      isMoverInZone: false,
    };

    this.moverRef = createRef();
    this.zoneRef = createRef();
    this.imageContainerRef = createRef();
    this.moverContainerRef = createRef();
    this.animationFrameId = null;
  }

  componentDidMount() {
    this.renderBoard();
    this.startCheckingMoverPosition();
  }

  componentWillUnmount() {
    this.stopCheckingMoverPosition();
  }

  startCheckingMoverPosition = () => {
    const checkPosition = () => {
      this.checkIfMoverInZone();
      this.animationFrameId = requestAnimationFrame(checkPosition);
    };
    this.animationFrameId = requestAnimationFrame(checkPosition);
  };

  stopCheckingMoverPosition = () => {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  };

  checkIfMoverInZone = () => {
    const mover = this.moverRef.current;
    const zone = this.zoneRef.current;

    if (!mover || !zone) return;

    const moverRect = mover.getBoundingClientRect();
    const zoneRect = zone.getBoundingClientRect();

    // Get the zone highlight area (40% to 60% of the zone width)
    const zoneLeftBound = zoneRect.left + zoneRect.width * 0.4;
    const zoneRightBound = zoneRect.left + zoneRect.width * 0.6;

    // Check if the center of the mover is inside the zone highlight
    const moverCenter = moverRect.left + moverRect.width / 2;
    const isInZone =
      moverCenter >= zoneLeftBound && moverCenter <= zoneRightBound;

    if (isInZone !== this.state.isMoverInZone) {
      this.setState({ isMoverInZone: isInZone });
    }
  };

  handleBtnClick = () => {
    const { isMoverInZone } = this.state;

    if (isMoverInZone) {
      this.updateCurrentPosition();
    } else {
      this.setState({ gameOver: true });
      this.resetBoard();
    }
  };

  updateCurrentPosition = () => {
    const { currentNodePosition, totalNodes } = this.state;

    const newPosition = currentNodePosition + 1;

    this.setState({ currentNodePosition: newPosition }, () => {
      this.updateBoard(newPosition);

      if (newPosition === totalNodes) {
        setTimeout(() => {
          this.setState({ showPopup: true });
        }, 1000);
      }
    });
  };

  updateBoard = (value) => {
    const { totalNodes } = this.state;
    if (value > totalNodes) return;

    const newBoard = [...this.state.board];

    newBoard[value - 2] = <div key={value - 2}>{value - 1}</div>;

    newBoard[value - 1] = (
      <div key={value - 1}>
        <img
          src="/images/police.jpg"
          alt={`Node ${value - 1}`}
          className="selected-image"
        />
      </div>
    );

    this.setState({ board: newBoard, gameOver: false });

    if (value === totalNodes && this.imageContainerRef.current) {
      const img = this.imageContainerRef.current.querySelector("img");
      if (img) {
        img.src = "/carouselimg/100.jpg";
      }
    }
  };

  resetBoard = () => {
    this.setState(
      { currentNodePosition: 0, board: [], gameOver: false },
      this.renderBoard
    );
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  renderBoard = () => {
    const { totalNodes } = this.state;
    const boardItems = Array.from({ length: totalNodes }, (_, i) => (
      <div key={i}>{i + 1}</div>
    ));
    this.setState({ board: boardItems });
  };

  resetBoardAndGameOver = () => {
    this.setState(
      {
        currentNodePosition: 0,
        board: [],
        gameOver: false,
        showPopup: false,
      },
      this.renderBoard
    );
  };

  render() {
    const {
      board,
      currentNodePosition,
      totalNodes,
      gameOver,
      showPopup,
    } = this.state;

    return (
      <div className="board-game">
        <div className="board-background"></div>

        <div className="board-content">
          <div className="instructions-card">
            <h3 className="instructions-title">Instructions</h3>
            <ol className="instructions-list">
              <li>
                Press 'Click here' when the moving ball is inside the 'Zone'.
              </li>
              <li>Reach box 5 to rescue a child from injustice!</li>
            </ol>
          </div>

          <div className="game-area">
            <div className="line-container">
              <div className="board-container">{board}</div>
              <div className="image-container" ref={this.imageContainerRef}>
                <img
                  src="/images/childm.png"
                  alt="Child"
                  className="child-image"
                />
              </div>
            </div>

            <div className="controls-panel">
              <div className="buttons-container">
                <button
                  className={`game-button primary-button ${
                    currentNodePosition === totalNodes ? "disabled" : ""
                  }`}
                  onClick={this.handleBtnClick}
                  disabled={currentNodePosition === totalNodes}
                >
                  Click Here
                </button>

                <button
                  className="game-button reset-button"
                  onClick={this.resetBoardAndGameOver}
                >
                  Replay
                </button>
              </div>

              <div className="game-mechanics">
                <div className="mover-container" ref={this.moverContainerRef}>
                  <div ref={this.moverRef} className="mover"></div>
                </div>
                <div className="zone" ref={this.zoneRef}>
                  <span>ZONE</span>
                </div>
              </div>

              {gameOver && (
                <div className="game-over-message">
                  <h2>Game over!</h2>
                  <p>Try again to save the child.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="success-popup">
            <div className="popup-content">
              <h2 className="popup-title">Woohoo!</h2>
              <p className="popup-message">
                You saved the child from child marriage. Now she's free to study
                and live without barriers. Thanks to your call to the police,
                she's safe!
              </p>
              <button className="popup-button" onClick={this.closePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Board;
