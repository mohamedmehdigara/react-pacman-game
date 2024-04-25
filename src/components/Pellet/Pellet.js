import React from 'react';

const Pellet = ({ eaten }) => {
  // Define the pellet style based on its eaten state
  const pelletStyle = {
    backgroundColor: eaten ? 'transparent' : 'yellow', // Change color when eaten
  };

  return <div className="pellet" style={pelletStyle}></div>;
};

export default Pellet;
