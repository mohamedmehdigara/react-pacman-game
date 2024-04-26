// Obstacle.js
import React from 'react';
import './Obstacle.css';

const Obstacle = ({ type }) => {
  return <div className={`obstacle ${type}`}></div>;
};

export default Obstacle;
