/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function Workout({ title, description, time, onComplete }) {
  const timer = useRef(null);

  function handleStartWorkout() {
    if (timer.current) {
      return;
    }

    // Todo: Start timer
    timer.current = setTimeout(() => {
      onComplete();
    }, time * 1000);
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
