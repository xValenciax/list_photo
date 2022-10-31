import React from "react";
import styles from "../cardHeader.module.css";
import { FaCheckCircle } from "react-icons/fa";

function CardHeader(props) {
  return (
    <div className={styles.cardHeader}>
      <div className="img">
        <img src={props.userProfilePhoto} alt="user profile"></img>
      </div>
      <p>{props.userName}</p>
      <FaCheckCircle className={styles.icon} />
    </div>
  );
}

export default CardHeader;
