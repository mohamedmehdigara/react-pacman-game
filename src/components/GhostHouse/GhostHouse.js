import React, { useState, useEffect } from 'react';

const GhostHouse = ({ onGhostEnter, onGhostExit }) => {
  const [doorOpen, setDoorOpen] = useState(false);

  // Simulate ghost entering and exiting
  useEffect(() => {
    const enterTimeout = setTimeout(() => {
      setDoorOpen(true);
      onGhostEnter();
    }, 2000); // Wait 2 seconds before opening the door

    const exitTimeout = setTimeout(() => {
      setDoorOpen(false);
      onGhostExit();
    }, 8000); // Wait 8 seconds before closing the door

    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(exitTimeout);
    };
  }, [onGhostEnter, onGhostExit]);

  return (
    <div className="ghost-house">
      <div className={`door ${doorOpen ? 'open' : 'closed'}`}></div>
    </div>
  );
};

export default GhostHouse;
