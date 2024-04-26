import React from 'react';
import './Maze.css'; // Import the CSS file for styling

const Maze = () => {
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

  const renderMaze = () => {
    return maze.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="maze-row">
          {row.map((cell, cellIndex) => {
            return (
              <div
                key={cellIndex}
                className={`maze-cell ${cell === 1 ? 'wall' : 'empty'}`}
              >
                {/* Render different elements based on cell value */}
                {renderCellContent(cell)}
              </div>
            );
          })}
        </div>
      );
    });
  };

  // Render different elements based on cell value
  const renderCellContent = (cell) => {
    switch (cell) {
      case 0:
        return <div className="pellet"></div>; // Render pellet for empty cell
      case 1:
        return <div className="wall"></div>; // Render wall for wall cell
      default:
        return null; // Default case
    }
  };

  return <div className="maze">{renderMaze()}</div>;
};

export default Maze;
