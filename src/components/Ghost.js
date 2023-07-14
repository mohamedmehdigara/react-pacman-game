import React, { useState, useEffect } from 'react';

const Ghost = ({ maze, pacmanPosition, gameOver }) => {
  const [position, setPosition] = useState({ x: 7, y: 5 });

  useEffect(() => {
    const moveGhost = () => {
      // Implement ghost movement logic
    };

    const intervalId = setInterval(moveGhost, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [maze, pacmanPosition, position]);

  const renderGhost = () => {
    return (
      <div
        className="ghost"
        style={{
          top: position.y * 20 + 'px',
          left: position.x * 20 + 'px',
        }}
      ></div>
    );
  };

  return <>{renderGhost()}</>;
};

export default Ghost;
