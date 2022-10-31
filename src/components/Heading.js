import React from "react";
import styles from "../heading.module.css";

function Heading(props) {
  return (
    <div className={styles.special__heading}>
      <h1 className={styles.text}>{props.text}</h1>
    </div>
  );
}

export default Heading;
