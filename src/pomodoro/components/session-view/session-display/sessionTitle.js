import React from "react";
import { minutesToDuration } from "../../../../utils/duration";

const SessionTitle = ({ session, sessionInMinutes }) => {
  //converts the session time display to mm:ss format
  const sessionTime = minutesToDuration(sessionInMinutes());

  //declares the session label as the label value in the session object if the session object exists
  const sessionLabel = session ? session.label : null;

  return (
    <h2 data-testid="session-title">
      {sessionLabel} for {sessionTime} minutes
    </h2>
  );
};

export default SessionTitle;
