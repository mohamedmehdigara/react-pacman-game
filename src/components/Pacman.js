import React, { useState, useEffect } from 'react';

const Pacman = ({ maze, gameOver }) => {
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

      // Check for collision with walls
      if (maze[newPosition.y][newPosition.x] !== 1) {
        setPosition(newPosition);

        // Check for collision with pellets
        if (maze[newPosition.y][newPosition.x] === 0) {
          setScore(prevScore => prevScore + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [maze, position]);

  const getRotation = () => {
    // Calculate the rotation angle based on Pac-Man's direction
    // Return the rotation angle based on the current direction
  };

  const renderPacman = () => {
    const rotation = getRotation();
    const style = {
      top: position.y * 20 + 'px',
      left: position.x * 20 + 'px',
      transform: `rotate(${rotation}deg)`,
    };

    return <div className="pacman" style={style}></div>;
  };

  return (
    <div className="pacman-container">
      <div className="score">Score: {score}</div>
      {renderPacman()}
    </div>
  );
};

export default Pacman;
