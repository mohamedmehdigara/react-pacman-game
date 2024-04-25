import React from 'react';

const Achievements = ({ unlockedAchievements }) => {
  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <ul>
        {unlockedAchievements.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.name}</strong>: {achievement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
