import React, { useState } from 'react';

const LevelSelector = ({ onSelectLevel }) => {
  // Define the levels or difficulty options
  const levels = ['Easy', 'Medium', 'Hard'];

  // State to store the selected level
  const [selectedLevel, setSelectedLevel] = useState(levels[0]);

  // Handle level selection
  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    onSelectLevel(level);
  };

  return (
    <div className="level-selector">
      <h2>Select Level</h2>
      <div className="level-options">
        {levels.map((level) => (
          <button
            key={level}
            className={`level-button ${selectedLevel === level ? 'selected' : ''}`}
            onClick={() => handleLevelSelect(level)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
