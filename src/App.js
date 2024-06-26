import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [status, setStatus] = useState(false);
  let [mstatus, setmStatus] = useState(false);

  return (
    <div className="App">
      <div className={`loginModel ${mstatus === true ? "show" : ""}`}>
        <span onClick={() => setmStatus(!mstatus)}>&times;</span>
      </div>

      <div className="inputOuter">
        <button onClick={() => setmStatus(!mstatus)}>Show Model</button>
        <h2>Show | Hide Password</h2>
        <input type={status ? "text" : "password"} />
        <button onClick={() => setStatus(!status)}>
          {status ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default App;
