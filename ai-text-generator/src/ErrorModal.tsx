import React from "react";
import styles from "./customCSS.module.css";

type ErrorModalProps = {
  message: string;
  close: () => void;
};

function ErrorModal(props: ErrorModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <span onClick={props.close} className={styles["close-button"]}>
          &times;
        </span>
        <h1>{props.message}</h1>
      </div>
    </div>
  );
}

export default ErrorModal;
