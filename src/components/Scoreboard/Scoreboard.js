import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div className="scoreboard">
      <h2>Score: {score}</h2>
      {/* Add other game statistics here if needed */}
    </div>
  );
};

export default Scoreboard;
