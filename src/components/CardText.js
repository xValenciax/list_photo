import React from "react";
import styles from "../cardText.module.css";

function CardText(props) {
  const { likes, liked, desc, photoname } = props;
  let likesCount = likes;
  if (liked) likesCount += 1;
  return (
    <div className={styles.cardText}>
      <div className={styles.nameAndLikes}>
        <h4>{photoname}</h4>
        <p>{likesCount} likes</p>
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default CardText;
