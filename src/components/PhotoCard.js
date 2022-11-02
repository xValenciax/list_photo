import React, { useState } from "react";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardText from "./CardText";
import styles from "../photoCard.module.css";

function PhotoCard(props) {
  const { username, profile, img, likes, photoname, desc, type } = props;
  const [liked, setLiked] = useState(false);

  const isLiked = () => {
    setLiked(true);
  };

  const isDisLiked = () => {
    setLiked(false);
  };
  return (
    <div className={styles.card}>
      <CardHeader username={username} profile={profile} type={type} />
      <CardImage
        img={img}
        isLiked={isLiked}
        isDisliked={isDisLiked}
        liked={liked}
      />
      <CardText likes={likes} liked={liked} desc={desc} photoname={photoname} />
    </div>
  );
}

export default PhotoCard;
