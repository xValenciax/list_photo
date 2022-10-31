import React from "react";

function CardHeader(props) {
  return (
    <div className="cardHead">
      <div className="img">
        <img src={props.userProfilePhoto} alt="user profile"></img>
      </div>
      <p>{props.userName}</p>
    </div>
  );
}

export default CardHeader;
