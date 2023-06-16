import classes from "./ActionInfoDisplay.module.scss";
import { useState, useEffect } from "react";

const ActionInfoDisplay: React.FC<{
  message: string;
  timeout?: number;
  success: boolean;
}> = ({ message, timeout = 1500, success }) => {
  const [showMessage, setShowMessage] = useState<boolean>(true);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    setShowMessage(true);
    setProgress(100);

    const displayProgressBar = setInterval(() => {
      setProgress((prevValue) => prevValue - 1);
    }, timeout / 105);

    const displayMessageTimer = setTimeout(() => {
      setShowMessage(false);
      setIsComplete(true);
    }, timeout);

    return () => {
      clearTimeout(displayMessageTimer);
      clearInterval(displayProgressBar);
    };
  }, [message, timeout]);

  if (isComplete || !showMessage) {
    return null;
  }
  const componentsColor = success ? "green" : "red";
  return (
    <div className={classes.infoDisplayBody}>
      <p>{message}</p>
      <div
        className={classes.progressBar}
        style={{ width: `${progress}%`, backgroundColor: componentsColor }}
      />
    </div>
  );
};

export default ActionInfoDisplay;
