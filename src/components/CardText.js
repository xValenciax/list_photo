import React from "react";

function CardText(props) {
  return (
    <div className="cardText">
      <div className="nameAndLikes">
        <h4>{props.photoName}</h4>
        <p>{props.likesCount} likes</p>
      </div>
      <div className="desc">{props.photoDesc}</div>
    </div>
  );
}

export default CardText;
