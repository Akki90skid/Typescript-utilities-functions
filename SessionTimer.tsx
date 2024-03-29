import * as React from "react";

const SessionTimeoutCounter = () => {
  const initialTimer = window.sessionStorage.getItem("timer") ?? 300; // 60 * 5 = 300min
  const timeoutId: any = React.useRef(null);
  const [timer, setTimer]:any = React.useState(initialTimer);

  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      window.sessionStorage.removeItem("timer");
       } else {
      setTimer(timer - 1);
      window.sessionStorage.setItem("timer", timer);
    }
  }, [timer]);

  React.useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  return <></>;
};

export default SessionTimeoutCounter;
