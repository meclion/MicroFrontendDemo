import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({ label, value, onChange }) => {
  return (
    <div className={styles.inputField}>
      <label>
        {label} : <input type="number" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default InputField;
