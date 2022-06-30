import React from "react";
import styles from "./Header.module.css";

function Header() {
  const title = "audio player";
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
