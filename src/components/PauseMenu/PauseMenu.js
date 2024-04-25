import React from 'react';

const PauseMenu = ({ onResume, onRestart, onQuit }) => {
  return (
    <div className="pause-menu">
      <h2>Paused</h2>
      <ul>
        <li onClick={onResume}>Resume</li>
        <li onClick={onRestart}>Restart</li>
        <li onClick={onQuit}>Quit</li>
      </ul>
    </div>
  );
};

export default PauseMenu;
