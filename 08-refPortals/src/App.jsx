import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easer Challenge" targetTime={1} />
        <TimerChallenge title="Medium Challenge" targetTime={5} />
        <TimerChallenge title="Hard Challenge" targetTime={10} />
        <TimerChallenge title="Insane Challenge" targetTime={10} />
      </div>
    </>
  );
}

export default App;
