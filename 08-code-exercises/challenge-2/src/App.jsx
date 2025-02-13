/* eslint-disable react-refresh/only-export-components */
import { useRef } from "react";
import Input from "./Input";

import "./App.css";

export const userData = {
  name: "",
  email: ""
};

export default function App() {
  const name = useRef();
  const email = useRef();

  function handleSaveData() {
    userData.name = name.current.value;
    userData.email = email.current.value;

    name.current.value = "";
    email.current.value = "";

    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={name} type="text" label="name" />
      <Input ref={email} type="email" label="email" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
