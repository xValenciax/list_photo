import React from "react";
import styles from "../cardText.module.css";

function CardText(props) {
  return (
    <div className={styles.cardText}>
      <div className={styles.nameAndLikes}>
        <h4>{props.photoName}</h4>
        <p>{props.likesCount} likes</p>
      </div>
      <div className={styles.desc}>{props.photoDesc}</div>
    </div>
  );
}

export default CardText;
