import React from "react";
import Section from "./Section";
import Header from "./Header";

function AddPhoto() {
  return (
    <div>
      <Header text="Gallery" />
      <Section text="Photo Info" margin={true} type="add" />
    </div>
  );
}

export default AddPhoto;
