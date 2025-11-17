import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstPart from "../Header";
import Welcome from "../Welcome";
import InputField from "./InputField";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstPart />
      <Welcome myName="Raul" />
      <Welcome myName="Amore mio Aicha" />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <InputField />
      <h1>Vite + React</h1>
      <h2>Il mio primo componente REACT!</h2>
      <h3>EPICODE!</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
