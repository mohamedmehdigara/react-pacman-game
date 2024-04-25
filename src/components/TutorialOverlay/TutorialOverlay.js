// TutorialOverlay.js
import React from 'react';
import './TutorialOverlay.css';

const TutorialOverlay = ({ onClose }) => {
  return (
    <div className="tutorial-overlay">
      <div className="tutorial-content">
        <h2>Welcome to Pac-Man!</h2>
        <p>Learn how to play:</p>
        <ul>
          <li>Use arrow keys to move Pac-Man</li>
          <li>Eat pellets to increase your score</li>
          <li>Avoid ghosts to stay alive</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TutorialOverlay;
