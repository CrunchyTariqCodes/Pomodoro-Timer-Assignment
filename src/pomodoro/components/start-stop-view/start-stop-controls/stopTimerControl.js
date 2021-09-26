import React from "react";

const StopTimerControl = ({ session, setSession, setIsTimerRunning }) => {
  //returns timer and session states to thier original settings
  const stopSession = () => {
    setIsTimerRunning(false);
    setSession(null);
  };

  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="stop"
      onClick={stopSession}
      disabled={!session}
      title="Stop the session"
    >
      <span className="oi oi-media-stop" />
    </button>
  );
};

export default StopTimerControl;
