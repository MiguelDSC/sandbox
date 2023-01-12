import { FormEvent, useState } from "react";
import "./App.css";
import styles from "./customCSS.module.css";

function App() {
  const [enteredText, setEnteredText] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      {/* user input for  */}
      <div className={styles.input}>
        Enter the burgerking restaurant number
        <form onSubmit={submitHandler}>
          <input
            type="number"
            onChange={(e) => {
              setEnteredText(e.target.value);
            }}
          />
          <button>Generate code</button>
        </form>
      </div>

      <h2></h2>

      {/* show validation code */}
    </div>
  );
}

export default App;
