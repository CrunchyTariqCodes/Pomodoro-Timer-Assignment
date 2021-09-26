import React from "react";
import TogglePlayPauseControl from "./start-stop-controls/togglePlayPauseControl";
import StopTimerControl from "./start-stop-controls/stopTimerControl";

const StartStopControls = ({
  session,
  setSession,
  isTimerRunning,
  setIsTimerRunning,
  focusDuration,
}) => {
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <TogglePlayPauseControl
            session={session}
            setSession={setSession}
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
            focusDuration={focusDuration}
          />
          <StopTimerControl
            session={session}
            setSession={setSession}
            setIsTimerRunning={setIsTimerRunning}
          />
        </div>
      </div>
    </div>
  );
};

export default StartStopControls;
