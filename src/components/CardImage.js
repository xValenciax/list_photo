import React from "react";
import styles from "../cardImg.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function CardImage(props) {
  const { img, type } = props;
  const { liked, isLiked, isDisliked } = props;
  console.log(type);
  return (
    <div className={styles.image}>
      <img
        src={img}
        alt="fetched randomly from the API"
        width="400px"
        height="350px"
        style={{ objectFit: "cover", objectPosition: "0 0" }}
      ></img>

      {liked ? (
        <FaHeart
          className={`${styles.Likedicon} ${styles.icon}`}
          onClick={() => isDisliked()}
        />
      ) : (
        <FaRegHeart className={styles.icon} onClick={() => isLiked()} />
      )}
    </div>
  );
}

export default CardImage;
