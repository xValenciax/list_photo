import React from "react";
import styles from "../heading.module.css";

function Heading(props) {
  const { margin } = props;
  return (
    <div
      className={`${styles.special__heading} ${margin ? styles.margin : ""}`}
    >
      <h1 className={`${styles.text}`}>{props.text}</h1>
    </div>
  );
}

export default Heading;
