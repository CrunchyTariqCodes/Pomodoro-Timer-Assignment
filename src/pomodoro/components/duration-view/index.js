import React from "react";
import { FocusDuration } from "./duration-controls/focusDuration";
import { BreakDuration } from "./duration-controls/breakDuration";

const DurationControls = ({
  session,
  focusDuration,
  setFocusDuration,
  breakDuration,
  setBreakDuration,
}) => {
  return (
    <div className="row">
      <FocusDuration
        session={session}
        focusDuration={focusDuration}
        setFocusDuration={setFocusDuration}
      />
      <BreakDuration
        session={session}
        breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
      />
    </div>
  );
};

export default DurationControls;
