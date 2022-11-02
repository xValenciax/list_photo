import React from "react";
import { Link } from "react-router-dom";
import styles from "../header.module.css";

function Header(props) {
  const { text } = props;
  const to = text === "Add" ? "/add-photo" : "/";
  return (
    <header className={styles.flex}>
      <h1 className={styles.title}>Photo Gallery</h1>
      <Link to={to}>
        <button className={styles.btn}>{text}</button>
      </Link>
    </header>
  );
}

export default Header;
