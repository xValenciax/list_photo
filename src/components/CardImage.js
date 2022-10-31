import React from "react";

function CardImage(props) {
  return (
    <div className="img">
      <img src={props.photoLink} alt="fetched randomly from the API"></img>
    </div>
  );
}

export default CardImage;
