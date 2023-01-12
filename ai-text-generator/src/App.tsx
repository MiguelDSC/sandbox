import { FormEvent, useState } from "react";
import "./App.css";
import styles from "./customCSS.module.css";
import loadingIMG from "./assets/loadingGif.gif";
import { getGeneratedText } from "./AppService";
import ErrorModal from "./ErrorModal";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    if (enteredText == "") {
      setErrorMessage("description can't be left empty!");
      setIsLoading(false);
      return;
    }

    const result = await getGeneratedText(enteredText);

    if (result == "Service Unavailable") {
      setErrorMessage(
        "OpenAi servers are currently overloaded with requests, try Again!"
      );
      setIsLoading(false);
      return;
    }

    if (result == "Failed to fetch") {
      setErrorMessage("Server is currently down, try again later!");
      setIsLoading(false);
      return;
    }

    setGeneratedText(result);
    setIsLoading(false);
    setEnteredText("");
  };

  return (
    <div className="App">
      {errorMessage && (
        <ErrorModal close={() => setErrorMessage("")} message={errorMessage} />
      )}

      <h2>Let AI generate a custom text for you!</h2>

      {isLoading ? (
        <img className={styles.loadingIMG} src={loadingIMG}></img>
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
                value={enteredText}
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
