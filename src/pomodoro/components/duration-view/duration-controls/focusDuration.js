import React from "react";
import { minutesToDuration } from "../../../../utils/duration";

export const FocusDuration = ({ session, focusDuration, setFocusDuration }) => {
  //converting the focus time to display in mm:ss format
  const focusInMinutes = minutesToDuration(focusDuration);

  //changing focus duration to decrease by 5 increments each time the function is called
  //unless that amount is lower than 5
  const decreaseFocusDuration = () =>
    setFocusDuration((duration) => Math.max(5, duration - 5));

  //changing focus duration to increase by 5 increments each time the function is called
  //unless that amount is greater than 60
  const increaseFocusDuration = () =>
    setFocusDuration((duration) => Math.min(60, duration + 5));

  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {focusInMinutes}
        </span>
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={decreaseFocusDuration}
            disabled={session}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={increaseFocusDuration}
            disabled={session}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};
