import React, { Component } from "react";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardText from "./CardText";
import styles from "../photoCard.module.css";

class PhotoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userProfilePhoto: "",
      photoLink: "",
      likesCount: "",
      photoName: "",
      photoDesc: "",
    };
  }
  render() {
    return (
      <div className="card">
        <CardHeader />
        <CardImage />
        <CardText />
      </div>
    );
  }
}

export default PhotoCard;
