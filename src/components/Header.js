import React from "react";
import styles from "../header.module.css";

function Header() {
  return (
    <header className={styles.flex}>
      <h1 className={styles.title}>Photo Gallery</h1>
      {/* this should be a component later */}
      <button>ADD</button>
    </header>
  );
}

export default Header;
