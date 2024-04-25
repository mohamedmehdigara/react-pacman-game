import React, { useState } from 'react';
import Maze from './components/Maze/Maze';
import Pacman from './components/Pacman/Pacman';
import Ghost from './components/Ghost/Ghost';
import GhostHouse from './components/GhostHouse/GhostHouse';
import Pellet from './components/Pellet/Pellet';
import PowerPellet from './components/PowerPellet/PowerPellet';
import './App.css';

const App = () => {
  const [gameOver, setGameOver] = useState(false);

  const handleGameOver = () => {
    setGameOver(true);
    // Additional game over logic or screen display
  };

  const pacmanPosition = { x: 1, y: 1 }; // Define pacmanPosition

  const handleGhostEnter = () => {
    // Logic when ghost enters certain condition
  };

  const handleGhostExit = () => {
    // Logic when ghost exits certain condition
  };

  const maze = [
    // Maze definition
  ];

  return (
    <div className="App">
      <h1>Pac-Man Game</h1>
      {gameOver && <h2>Game Over</h2>}
      <GhostHouse onGhostEnter={handleGhostEnter} onGhostExit={handleGhostExit} />
      <Maze>
        {/* Map through the maze array and render Pellet or PowerPellet component for each cell */}
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} className="maze-row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={`maze-cell ${cell === 1 ? 'wall' : 'empty'}`}>
                {cell === 0 ? <Pellet /> : cell === 2 ? <PowerPellet eaten={false} /> : null}
              </div>
            ))}
          </div>
        ))}
      </Maze>
      <Pacman maze={maze} gameOver={handleGameOver} />
      <Ghost
        maze={maze}
        pacmanPosition={pacmanPosition}
        gameOver={handleGameOver}
        onGhostEnter={handleGhostEnter} // Pass onGhostEnter as a prop
        onGhostExit={handleGhostExit} // Pass onGhostExit as a prop
      />
    </div>
  );
};

export default App;
