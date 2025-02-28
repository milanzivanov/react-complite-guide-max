import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");

    setTimeout(() => onTimeout(), timeout);
    // const timer = setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timeout}></progress>
  );
}

export default QuestionTimer;
