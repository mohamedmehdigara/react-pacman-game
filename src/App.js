import React, { useState } from 'react';
import Maze from './components/Maze/Maze';
import Pacman from './components/Pacman/Pacman';
import Ghost from './components/Ghost/Ghost';
import GhostHouse from './components/GhostHouse/GhostHouse';
import './App.css';

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [ghostsInsideHouse, setGhostsInsideHouse] = useState(0);

  const handleGameOver = () => {
    setGameOver(true);
    // Additional game over logic or screen display
  };

  const handleGhostEnter = () => {
    setGhostsInsideHouse(prevCount => prevCount + 1);
  };

  const handleGhostExit = () => {
    setGhostsInsideHouse(prevCount => prevCount - 1);
  };

  const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  return (
    <div className="App">
      <h1>Pac-Man Game</h1>
      {gameOver && <h2>Game Over</h2>}
      <GhostHouse onGhostEnter={handleGhostEnter} onGhostExit={handleGhostExit} />
      <Maze />
      <Pacman maze={maze} gameOver={handleGameOver} />
      <Ghost maze={maze} pacmanPosition={{ x: 1, y: 1 }} gameOver={handleGameOver} />
    </div>
  );
};

export default App;
