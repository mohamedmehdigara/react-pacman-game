import React, { useState, useEffect } from 'react';

const Pacman = ({ maze, gameOver }) => {
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState('right'); // Default direction

  useEffect(() => {
    const handleKeyPress = (e) => {
      const { key } = e;
      // Update direction based on arrow keys
      if (key === 'ArrowUp') {
        setDirection('up');
      } else if (key === 'ArrowDown') {
        setDirection('down');
      } else if (key === 'ArrowLeft') {
        setDirection('left');
      } else if (key === 'ArrowRight') {
        setDirection('right');
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const newPosition = { ...position };

    // Update position based on direction
    if (direction === 'up') {
      newPosition.y = position.y - 1;
    } else if (direction === 'down') {
      newPosition.y = position.y + 1;
    } else if (direction === 'left') {
      newPosition.x = position.x - 1;
    } else if (direction === 'right') {
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
  }, [maze, direction, position]);

  const getRotation = () => {
    // Calculate the rotation angle based on Pac-Man's direction
    switch (direction) {
      case 'up':
        return 0;
      case 'down':
        return 180;
      case 'left':
        return -90;
      case 'right':
        return 90;
      default:
        return 0;
    }
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
