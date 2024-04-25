import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import the CSS file for styling

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  // Function to decrement time remaining every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    // Clear the interval when component unmounts or time runs out
    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Handle time up
  useEffect(() => {
    if (timeRemaining === 0) {
      onTimeUp();
    }
  }, [timeRemaining, onTimeUp]);

  // Format time remaining for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="timer">
      Time Remaining: {formatTime(timeRemaining)}
    </div>
  );
};

export default Timer;
