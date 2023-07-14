import React, { useState } from 'react';
import Maze from './components/Maze';
import Pacman from './components/Pacman';
import Ghost from './components/Ghost';
import "./App.css";

const App = () => {
  const [gameOver, setGameOver] = useState(false);

  const handleGameOver = () => {
    setGameOver(true);
    // Perform any game over logic here
  };

  // Define the maze layout
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

  // Define Pac-Man's initial position
  const pacmanPosition = { x: 1, y: 1 };

  return (
    <div className="App">
      <h1>Pac-Man Game</h1>
      {gameOver && <h2>Game Over</h2>}
      <Maze />
      <Pacman maze={maze} pacmanPosition={pacmanPosition} gameOver={handleGameOver} />
      <Ghost maze={maze} pacmanPosition={pacmanPosition} gameOver={handleGameOver} />
    </div>
  );
};

export default App;
