import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { question } from "./Data/Question";

function App() {
  let [status, setStatus] = useState(false);
  let [mstatus, setmStatus] = useState(false);
  let [currentId, setCurrentId] = useState(question[0].id);
  let allQuestion = question;

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

      <div className="faq"></div>
      <h1>FAQ</h1>
      {allQuestion.map((v, i) => {
        return (
          <div className="faqItems">
            <h3
              onClick={() => {
                setCurrentId(v.id === currentId ? 0 : v.id);
              }}
            >
              {v.question}

              <span> {currentId === v.id ? "-" : "+"}</span>
            </h3>
            <p className={currentId === v.id ? "showP" : " "}>{v.answer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
