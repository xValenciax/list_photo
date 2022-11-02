import React from "react";
import styles from "../cardHeader.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function CardHeader(props) {
  const { removeEle, id } = props;
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
      {props.type === "local" ? (
        <AiFillDelete className={styles.delete} onClick={() => removeEle(id)} />
      ) : (
        ""
      )}
    </div>
  );
}

export default CardHeader;
