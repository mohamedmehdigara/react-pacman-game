import React, { useState, useEffect } from 'react';

const Pacman = ({ maze }) => {
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const { key } = e;
      const newPosition = { ...position };

      // Update position based on arrow keys
      if (key === 'ArrowUp') {
        newPosition.y = position.y - 1;
      } else if (key === 'ArrowDown') {
        newPosition.y = position.y + 1;
      } else if (key === 'ArrowLeft') {
        newPosition.x = position.x - 1;
      } else if (key === 'ArrowRight') {
        newPosition.x = position.x + 1;
      }

      // Check for collision with pellets and ghosts
      if (maze[newPosition.y][newPosition.x] !== 1) {
        setPosition(newPosition);

        if (maze[newPosition.y][newPosition.x] === 0) {
          // Update score if a pellet is eaten
          setScore((prevScore) => prevScore + 1);
        }
      }
    };

    // Add event listener for key presses
    window.addEventListener('keydown', handleKeyPress);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [maze, position]);

  const renderPacman = () => {
    return (
      <div
        className="pacman"
        style={{
          top: position.y * 20 + 'px',
          left: position.x * 20 + 'px',
        }}
      ></div>
    );
  };

  return (
    <div className="pacman-container">
      <div className="score">Score: {score}</div>
      {renderPacman()}
    </div>
  );
};

export default Pacman;
