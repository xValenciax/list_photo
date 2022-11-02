import React, { Component } from "react";
import Heading from "./Heading";
import styles from "../section.module.css";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import classPhoto from "./classPhoto";
import FormAddPhoto from "./FormAddPhoto";

export class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoList: [],
    };
  }

  componentDidMount() {
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
  }

  render() {
    const { photoList } = this.state;
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
          ) : type === "local" ? (
            "no content here yet"
          ) : (
            <FormAddPhoto />
          )}
        </div>
      </section>
    );
  }
}
export default Section;
