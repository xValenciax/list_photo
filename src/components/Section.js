import React, { Component } from "react";
import Heading from "./Heading";
import styles from "../section.module.css";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import classPhoto from "./classPhoto";
import FormAddPhoto from "./FormAddPhoto";
import avatar from "../WhatsApp Image 2022-05-26 at 11.36.56 PM.jpeg";

export class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoList: [],
      localList: [],
      localID: 1,
    };
  }

  componentDidMount() {
    // get images from the unsplash API
    const API_KEY = "3h35TFoziVsEhdtoz3HQy_7j_uSsQj1yX_Xn0iQAGV0";
    axios
      .get(`https://api.unsplash.com/photos?per_page=4&&client_id=${API_KEY}`)
      .then((res) => {
        let list = [];

        res.data.forEach((element) => {
          let photo = new classPhoto(
            element.blur_hash,
            element.user.name,
            element.user.profile_image.medium,
            element.urls.regular,
            "placeholder name",
            element.likes,
            element.description ||
              "This is an image retrieved from the API that has no description"
          );
          list.push(photo);
        });

        this.setState({ photoList: list });
      })
      .catch((err) => {
        this.setState({ errMsg: err });
      });

    // get images from local storage
    let locals = JSON.parse(localStorage.getItem("photos"));
    let list2 = [];
    let counter = 1;
    for (let img of locals) {
      img = JSON.parse(img);
      let photo = new classPhoto(
        counter,
        "Selim Mohamed",
        avatar,
        img.img,
        img.photoname,
        0,
        img.desc
      );
      counter++;
      list2.push(photo);
    }
    this.setState({ localList: list2 });
    this.setState({ localID: counter });
  }

  render() {
    const { photoList, localList } = this.state;
    const { type, margin } = this.props;
    return (
      <section text={this.props.text}>
        <Heading text={this.props.text} margin={margin} />
        <div className={styles.content}>
          {type === "public" && photoList !== undefined && photoList.length ? (
            photoList.map((photo) => (
              <PhotoCard
                key={photo.getID()}
                username={photo.getUsername()}
                profile={photo.getProfilePhoto()}
                img={photo.getPhoto()}
                likes={photo.getLikes()}
                photoname={photo.getphotoName()}
                desc={photo.getDesc()}
                className={styles.card}
              />
            ))
          ) : type === "local" &&
            localList !== undefined &&
            localList.length ? (
            localList.map((photo) => (
              <PhotoCard
                key={photo.getID()}
                username={photo.getUsername()}
                profile={photo.getProfilePhoto()}
                img={photo.getPhoto()}
                likes={photo.getLikes()}
                photoname={photo.getphotoName()}
                desc={photo.getDesc()}
                className={styles.card}
                type={this.props.type}
              />
            ))
          ) : (
            <FormAddPhoto />
          )}
        </div>
      </section>
    );
  }
}
export default Section;
