import React from 'react';

const BonusItem = ({ collected }) => {
  return <div className={`bonus-item ${collected ? 'collected' : ''}`}></div>;
};

export default BonusItem;
