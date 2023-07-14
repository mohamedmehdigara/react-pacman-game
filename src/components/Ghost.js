import React, { useState, useEffect } from 'react';

const Ghost = ({ maze, pacmanPosition, gameOver }) => {
  const [position, setPosition] = useState({ x: 7, y: 5 });

  useEffect(() => {
    const moveGhost = () => {
      const directions = [
        { x: 0, y: -1 }, // Up
        { x: 0, y: 1 }, // Down
        { x: -1, y: 0 }, // Left
        { x: 1, y: 0 }, // Right
      ];

      const validDirections = [];

      // Check for valid moves
      for (const direction of directions) {
        const newPosition = {
          x: position.x + direction.x,
          y: position.y + direction.y,
        };

        if (
          maze[newPosition.y][newPosition.x] !== 1 &&
          !(newPosition.x === pacmanPosition.x && newPosition.y === pacmanPosition.y)
        ) {
          validDirections.push(direction);
        }
      }

      // Choose a random valid move
      if (validDirections.length > 0) {
        const randomIndex = Math.floor(Math.random() * validDirections.length);
        const newDirection = validDirections[randomIndex];
        const newPosition = {
          x: position.x + newDirection.x,
          y: position.y + newDirection.y,
        };

        setPosition(newPosition);

        // Check for collision with Pac-Man
        if (
          newPosition.x === pacmanPosition.x &&
          newPosition.y === pacmanPosition.y
        ) {
          gameOver();
        }
      }
    };

    // Move ghost every 500ms
    const intervalId = setInterval(moveGhost, 500);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [maze, pacmanPosition, position, gameOver]);

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
