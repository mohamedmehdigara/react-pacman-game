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
        newPosition.y = Math.max(0, position.y - 1); // Move up and ensure within bounds
      } else if (key === 'ArrowDown') {
        newPosition.y = Math.min(maze.length - 1, position.y + 1); // Move down and ensure within bounds
      } else if (key === 'ArrowLeft') {
        newPosition.x = Math.max(0, position.x - 1); // Move left and ensure within bounds
      } else if (key === 'ArrowRight') {
        newPosition.x = Math.min(maze[0].length - 1, position.x + 1); // Move right and ensure within bounds
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
  }, [maze, position]); // Dependency array includes position

  const getRotation = () => {
    // Calculate the rotation angle based on Pac-Man's direction
    // Return the rotation angle based on the current direction
    // You can implement this based on the movement logic if needed
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
