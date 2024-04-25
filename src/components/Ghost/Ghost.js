import React, { useState, useEffect } from 'react';

const Ghost = ({ maze, pacmanPosition, gameOver, onGhostEnter }) => {
  const [position, setPosition] = useState({ x: 7, y: 5 });

  useEffect(() => {
    const moveGhost = () => {
      // Implement ghost movement logic
      const newPosition = { ...position }; // Copying the current position
    
      // Example: Randomly move the ghost
      const direction = Math.floor(Math.random() * 4); // Random number between 0 and 3
      switch (direction) {
        case 0:
          newPosition.x = Math.max(0, position.x - 1); // Move left
          break;
        case 1:
          newPosition.x = Math.min(maze[0].length - 1, position.x + 1); // Move right
          break;
        case 2:
          newPosition.y = Math.max(0, position.y - 1); // Move up
          break;
        case 3:
          newPosition.y = Math.min(maze.length - 1, position.y + 1); // Move down
          break;
        default:
          break;
      }
    
      // Check for collision with walls
      if (maze[newPosition.y][newPosition.x] === 1) {
        // Wall collision, stay in the same position
        return;
      }
    
      // Update the position state with the new position
      setPosition(newPosition);
    
      // Example: Check if the ghost enters a certain condition and trigger onGhostEnter
      if (newPosition.x === pacmanPosition.x && newPosition.y === pacmanPosition.y) {
        // Assuming onGhostEnter is called with some parameters
        onGhostEnter(/* Pass relevant parameters */);
      }
    };
    
    const intervalId = setInterval(moveGhost, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [maze, pacmanPosition, position, onGhostEnter]); // Dependency array includes position, pacmanPosition, and onGhostEnter

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

export default Ghost;
