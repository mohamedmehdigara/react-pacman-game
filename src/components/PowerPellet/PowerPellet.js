import React from 'react';

const PowerPellet = ({ eaten }) => {
  // Define the power pellet style based on its eaten state
  const pelletStyle = {
    backgroundColor: eaten ? 'transparent' : 'red', // Change color when eaten
  };

  return <div className="power-pellet" style={pelletStyle}></div>;
};

export default PowerPellet;
