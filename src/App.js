// App.js
import React, { useState } from 'react';
import Maze from './components/Maze/Maze';
import Pacman from './components/Pacman/Pacman';
import Ghost from './components/Ghost/Ghost';
import GhostHouse from './components/GhostHouse/GhostHouse';
import Pellet from './components/Pellet/Pellet';
import PowerPellet from './components/PowerPellet/PowerPellet';
import PowerUp from './components/PowerUp/PowerUp';
import BonusItem from './components/BonusItem/BonusItem';
import Scoreboard from './components/Scoreboard/Scoreboard';
import GameOverScreen from './components/GameOverScreen/GameOverScreen';
import LevelSelector from './components/LevelSelector/LevelSelector';
import Timer from './components/Timer/Timer';
import TutorialOverlay from './components/TutorialOverlay/TutorialOverlay';
import Animations from './components/Animations/Animations';
import Achievements from './components/Achievements/Achievements';
import PauseMenu from './components/PauseMenu/PauseMenu';
import Obstacle from './components/Obstacle/Obstacle'; // Import Obstacle component

import './App.css';

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showTutorial, setShowTutorial] = useState(true);

  const handleCloseTutorial = () => {
    setShowTutorial(false);
  };

  const handleGameOver = () => {
    setGameOver(true);
    // Additional game over logic or screen display
  };

  const handleRestart = () => {
    setGameOver(false);
    setScore(0);
    // Additional logic for restarting the game
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

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div className="App">
      <h1>Pac-Man Game</h1>
      {gameOver ? (
        <GameOverScreen score={score} onRestart={handleRestart} />
      ) : (
        <>
          <Scoreboard score={score} />
          <Timer />
          {showTutorial && <TutorialOverlay onClose={handleCloseTutorial} />}
          <Animations />
          <Achievements unlockedAchievements={[]} />
          <PauseMenu />
          <GhostHouse onGhostEnter={handleGhostEnter} onGhostExit={handleGhostExit} />
          <Maze>
            {maze.map((row, rowIndex) => (
              <div key={rowIndex} className="maze-row">
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} className={`maze-cell ${cell === 1 ? 'wall' : 'empty'}`}>
                    {cell === 0 ? <Pellet /> : cell === 2 ? <PowerPellet eaten={false} /> : cell === 3 ? <PowerUp type="speedBoost" /> : cell === 4 ? <BonusItem /> : cell === 5 ? <Obstacle type="wall" /> : null}
                  </div>
                ))}
              </div>
            ))}
          </Maze>
          <Pacman maze={maze} gameOver={handleGameOver} onScoreUpdate={setScore} />
          <Ghost
            maze={maze}
            pacmanPosition={pacmanPosition}
            gameOver={handleGameOver}
            onGhostEnter={handleGhostEnter}
            onGhostExit={handleGhostExit}
          />
          <LevelSelector onSelect={handleLevelSelect} selectedLevel={selectedLevel} />
        </>
      )}
    </div>
  );
};

export default App;
