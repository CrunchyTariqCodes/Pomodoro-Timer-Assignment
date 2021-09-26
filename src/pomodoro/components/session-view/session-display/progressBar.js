import React from "react";

//returns a percentage of from a total value
const percentageElapsed = (totalAmount, currentAmount) =>
  (currentAmount / totalAmount) * 100;

//converts total in minutes to total in seconds
const minutesToSeconds = (value) => value * 60;

const ProgressBar = ({ sessionInMinutes, timeRemaining }) => {
  //converts total duration to seconds
  const totalTime = minutesToSeconds(sessionInMinutes());

  //calculates elapsed time
  const elapsedTime = totalTime - timeRemaining;

  //calculates the percentage of time elasped in relation to total duration
  const progress = percentageElapsed(totalTime, elapsedTime);

  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
