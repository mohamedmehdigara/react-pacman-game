import React from 'react';

const Pellet = ({ eaten }) => {
  return <div className={`pellet ${eaten ? 'eaten' : ''}`}></div>;
};

export default Pellet;
