import React from "react";
import styles from "../cardHeader.module.css";
import { FaCheckCircle } from "react-icons/fa";

function CardHeader(props) {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.image}>
        <img
          className={styles.profile}
          src={props.profile}
          alt="user profile"
        ></img>
      </div>
      <p>{props.username}</p>
      <FaCheckCircle className={styles.icon} />
    </div>
  );
}

export default CardHeader;
