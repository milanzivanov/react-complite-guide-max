import { useState, useRef } from "react";
import ResultModal from "./ResultMOdal";

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.showModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer active" : "Timer not active"}
        </p>
      </section>
    </>
  );
}
export default TimerChallenge;

// for older react versions
// function TimerChallenge({ title, targetTime }) {
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   const timer = useRef();
//   const dialog = useRef();

//   function handleStart() {
//     timer.current = setTimeout(() => {
//       setTimerExpired(true);

//       dialog.current.open();
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearTimeout(timer.current);
//   }

//   return (
//     <>
//       <ResultModal ref={dialog} result="lost" targetTime={targetTime} />

//       <section className="challenge">
//         <h2>{title}</h2>
//         <p className="challenge-time">
//           {targetTime} second{targetTime > 1 ? "s" : ""}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? "Stop" : "Start"} challenge
//           </button>
//         </p>
//         <p className={timerStarted ? "active" : undefined}>
//           {timerStarted ? "Timer active" : "Timer not active"}
//         </p>
//       </section>
//     </>
//   );
// }
// export default TimerChallenge;
