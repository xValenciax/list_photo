import React from "react";
import styles from "../cardImg.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function CardImage(props) {
  return (
    <div className={styles.image}>
      <img src={props.photoLink} alt="fetched randomly from the API"></img>
      <FaRegHeart className={styles.icon} />
    </div>
  );
}

export default CardImage;
