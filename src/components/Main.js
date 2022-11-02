import React from "react";
import Section from "./Section";

function Main() {
  return (
    <main>
      <Section text="Public Photos" type="public" />
      <Section text="Local Photos" type="local" />
    </main>
  );
}

export default Main;
