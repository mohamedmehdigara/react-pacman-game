// Animations.js
import React from 'react';
import './Animations.css';

const Animations = ({ type, onAnimationEnd }) => {
  const handleAnimationEnd = () => {
    // Execute callback function when animation ends
    onAnimationEnd();
  };

  return (
    <div className={`animation ${type}`} onAnimationEnd={handleAnimationEnd}>
      {/* Additional animation elements */}
    </div>
  );
};

export default Animations;
