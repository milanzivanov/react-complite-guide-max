import { useRef } from "react";

import Form from "./Form";

import "./App.css";

export default function App() {
  const formRef = useRef(null);

  function handleRestart() {
    formRef.current.resetForm();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={formRef} />
    </div>
  );
}

// export default function App() {
//   const form = useRef();

//   function handleRestart() {
//     form.current.clear();
//   }

//   return (
//     <div id="app">
//       <button onClick={handleRestart}>Restart</button>
//       <Form ref={form} />
//     </div>
//   );
// }
