import React from 'react';
import './PowerUp.css';

const PowerUp = ({ type, active, duration }) => {
  // Logic to determine the appearance and behavior of different power-ups
  let powerUpClassName = 'power-up';
  let powerUpText = '';

  switch (type) {
    case 'speedBoost':
      powerUpClassName += ' speedBoost';
      powerUpText = 'Speed Boost';
      break;
    case 'invincibility':
      powerUpClassName += ' invincibility';
      powerUpText = 'Invincibility';
      break;
    case 'bonusMultiplier':
      powerUpClassName += ' bonusMultiplier';
      powerUpText = 'Bonus Multiplier';
      break;
    default:
      break;
  }

  return (
    <div className={active ? powerUpClassName : 'hidden'}>
      <span className="power-up-text">{powerUpText}</span>
      {duration && <span className="power-up-duration">{duration}</span>}
    </div>
  );
};

export default PowerUp;
