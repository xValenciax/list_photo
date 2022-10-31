import React from "react";
import Heading from "./Heading";
import styles from "../section.module.css";
import PhotoCard from "./PhotoCard";

function Section(props) {
  return (
    <section text={props.text}>
      <Heading text={props.text} />
      <div className={styles.content}>
        <PhotoCard />
      </div>
    </section>
  );
}

export default Section;
