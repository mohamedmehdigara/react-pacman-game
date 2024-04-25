import React from 'react';
import './GameOverScreen.css'; // Import CSS for styling

const GameOverScreen = ({ finalScore, onRestart }) => {
  return (
    <div className="game-over-screen">
      <h2>Game Over</h2>
      <p>Final Score: {finalScore}</p>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default GameOverScreen;
