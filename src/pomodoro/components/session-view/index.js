import React from "react";
import Countdown from "./session-display/countdown";
import ProgressBar from "./session-display/progressBar";
import SessionTitle from "./session-display/sessionTitle";

const SessionDisplay = ({ session, focusDuration, breakDuration }) => {
  //declares variable as the timeRemaining value in the session object if the session object exists exists
  const timeRemaining = session ? session.timeRemaining : null;

  //returns either the focu or break duration values depending on which value the session label key is currently holding
  const sessionInMinutes = () => {
    switch (session?.label) {
      case "Focusing": {
        return focusDuration;
      }
      case "On Break": {
        return breakDuration;
      }
      default: {
        return focusDuration;
      }
    }
  };

  if (!session) {
    return null;
  } else {
    return (
      <div>
        <div className="row mb-2">
          <div className="col">
            <SessionTitle
              session={session}
              sessionInMinutes={sessionInMinutes}
            />
            <Countdown timeRemaining={timeRemaining} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <ProgressBar
              sessionInMinutes={sessionInMinutes}
              timeRemaining={timeRemaining}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default SessionDisplay;
