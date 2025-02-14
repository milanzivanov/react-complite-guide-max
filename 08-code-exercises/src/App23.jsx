import { useState } from "react";

import Toast from "./Toast";

import "./App.css";
function App() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  function handleEnrol() {
    // Todo: Show toast

    setIsToastVisible(true);

    setTimeout(() => {
      // Todo: hide toast
      setIsToastVisible(false);
    }, 3000);
  }

  return (
    <div id="app">
      {/* Todo: Render <Toast /> component (conditionally) here */}
      {isToastVisible && <Toast message="You are now enrolled!" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
