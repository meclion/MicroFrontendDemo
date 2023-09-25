import React from "react";
import styles from "./Header.module.scss";

const Header = ({ subject }) => {
  return <h1 className={styles.header}>{subject}</h1>;
};

export default Header;
