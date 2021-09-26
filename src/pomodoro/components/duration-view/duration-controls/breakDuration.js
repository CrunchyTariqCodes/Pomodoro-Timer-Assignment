import React from "react";
import { minutesToDuration } from "../../../../utils/duration";

export const BreakDuration = ({ session, breakDuration, setBreakDuration }) => {
  //converting the break time to display in mm:ss format
  const breakInMinutes = minutesToDuration(breakDuration);

  //changing break duration to decrease by 1 minute each time the function is called
  //unless that amount is lower than 1
  const decreaseBreakDuration = () =>
    setBreakDuration((duration) => Math.max(1, duration - 1));

  //changing break duration to increase by 1 minute each time the function is called
  //unless that amount is greater than 15
  const increaseBreakDuration = () =>
    setBreakDuration((duration) => Math.min(15, duration + 1));

  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {breakInMinutes}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={decreaseBreakDuration}
              disabled={session}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={increaseBreakDuration}
              disabled={session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
