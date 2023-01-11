import { FormEvent, useState } from "react";
import "./App.css";
import styles from "./customCSS.module.css";
import loadingIMG from "./assets/loadingGif.gif";
import { getGeneratedText } from "./AppService";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    if (enteredText.trim() == "") {
      setIsLoading(false);
      return;
    }

    const result = await getGeneratedText(enteredText);

    if (result == "") {
      setIsLoading(false);
      return;
    }

    setGeneratedText(result);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h2>Let AI generate a custom text for you!</h2>

      {isLoading ? (
        <img src={loadingIMG}></img>
      ) : (
        <>
          <div>
            <form className={styles.form} onSubmit={submitHandler}>
              <input
                className={styles.input}
                onChange={(e) => {
                  setEnteredText(e.target.value);
                }}
                type="text"
                placeholder="Enter a description for your text"
              />
              <button>Generate</button>
            </form>
          </div>
          {generatedText && (
            <>
              <h2>Output</h2>
              <div className={styles.output}>{generatedText}</div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
