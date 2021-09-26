import React from "react";
import { secondsToDuration } from "../../../../utils/duration";

const Countdown = ({ timeRemaining }) => {
  //converts time remaining to mm:ss format
  const countdown = secondsToDuration(timeRemaining);

  return (
    <p className="lead" data-testid="session-sub-title">
      {countdown} remaining
    </p>
  );
};

export default Countdown;
