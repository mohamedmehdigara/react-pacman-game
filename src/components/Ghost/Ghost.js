import React, { useState, useEffect } from 'react';

const Ghost = ({ maze, pacmanPosition, gameOver, onGhostEnter }) => {
  const [position, setPosition] = useState({ x: 7, y: 5 });

  useEffect(() => {
    const moveGhost = () => {
      // Implement ghost movement logic
      const newPosition = { ...position }; // Copying the current position

      // Example: Move the ghost to the left (decrease x coordinate)
      newPosition.x = position.x - 1;

      // Update the position state with the new position
      setPosition(newPosition);

      // Example: Check if the ghost enters a certain condition and trigger onGhostEnter
      if (newPosition.x === 0) {
        // Assuming onGhostEnter is called with some parameters
        onGhostEnter(/* Pass relevant parameters */);
      }
    };

    const intervalId = setInterval(moveGhost, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [maze, pacmanPosition, position, onGhostEnter]); // Dependency array includes position and onGhostEnter

  // Rest of the component code...

};

export default Ghost;
