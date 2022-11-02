import React, { useState } from "react";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardText from "./CardText";
import styles from "../photoCard.module.css";

function PhotoCard(props) {
  const {
    id,
    username,
    profile,
    img,
    likes,
    photoname,
    desc,
    type,
    removeEle,
  } = props;
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div className={styles.card}>
      <CardHeader
        username={username}
        profile={profile}
        type={type}
        removeEle={removeEle}
        id={id}
      />
      <CardImage img={img} isLiked={toggleLiked} liked={liked} />
      <CardText likes={likes} liked={liked} desc={desc} photoname={photoname} />
    </div>
  );
}

export default PhotoCard;
