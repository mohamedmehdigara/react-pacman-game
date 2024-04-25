import React from 'react';

const PowerPellet = ({ eaten }) => {
  return <div className={`power-pellet ${eaten ? 'eaten' : ''}`}></div>;
};

export default PowerPellet;
