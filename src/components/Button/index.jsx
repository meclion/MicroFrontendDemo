import React from "react";
import styles from "./button.module.scss";

const Button = ({ label, value, onClick }) => {
  return (
    <div className={styles.buttonBackgroundColor}>
      <button className={styles.button} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
