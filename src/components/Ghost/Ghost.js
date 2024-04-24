import React, { useState, useEffect } from 'react';

const Ghost = ({ maze, pacmanPosition, gameOver }) => {
  const [position, setPosition] = useState({ x: 7, y: 5 });

  useEffect(() => {
    const moveGhost = () => {
      // Calculate the direction towards Pacman
      const dx = pacmanPosition.x - position.x;
      const dy = pacmanPosition.y - position.y;

      // Choose the direction to move towards Pacman
      let nextX = position.x;
      let nextY = position.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        // Move horizontally
        nextX += dx > 0 ? 1 : -1;
      } else {
        // Move vertically
        nextY += dy > 0 ? 1 : -1;
      }

      // Check if the next position is a valid tile
      if (isValidMove(nextX, nextY)) {
        setPosition({ x: nextX, y: nextY });
      }
    };

    const intervalId = setInterval(moveGhost, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [maze, pacmanPosition, position]);

  const isValidMove = (x, y) => {
    // Check if the next position is within the bounds of the maze
    if (x < 0 || x >= maze[0].length || y < 0 || y >= maze.length) {
      return false;
    }
    // Check if the next position is not a wall
    return maze[y][x] !== 1;
  };

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
