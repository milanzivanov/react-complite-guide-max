// CD21

import { useRef } from "react";

function App() {
  const filePicker = useRef();

  function handleStartPickImage() {
    filePicker.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          ref={filePicker}
        />
        <button onClick={handleStartPickImage}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
