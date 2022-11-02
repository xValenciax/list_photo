import React, { useRef, useState } from "react";
import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";
import styles from "../Form.module.css";

function FormAddPhoto() {
  const [photos, setphotos] = useState(
    JSON.parse(localStorage.getItem("photos"))
  );
  const nameRef = useRef(null);
  const descRef = useRef(null);

  const uploader = Uploader({
    apiKey: "free",
  });

  const options = { multi: true };

  const MyButtonComponent = () => (
    <UploadButton
      uploader={uploader} // Required.
      options={options} // Optional.
      onComplete={(files) => {
        let list2 = photos;
        // Optional.
        if (files.length === 0) {
          console.log("No files selected.");
        } else {
          console.log("Files uploaded:");
          console.log(files.map((f) => f.fileUrl));
          files.forEach((f) =>
            list2.push(
              JSON.stringify({
                img: f.fileUrl,
                photoname: nameRef.current.value,
                desc: descRef.current.value,
              })
            )
          );
          setphotos(list2);
          localStorage.setItem("photos", JSON.stringify(photos));
        }
      }}
    >
      {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
    </UploadButton>
  );

  return (
    <form action="#" method="post">
      <div>
        <label htmlFor="photo_name">Name</label>
        <br />
        <input
          ref={nameRef}
          type="text"
          name="Name"
          id="photo_name"
          placeholder="Photo Name"
        />
      </div>
      <div>
        <label htmlFor="photo_name">Description</label>
        <br />
        <textarea
          ref={descRef}
          id="description"
          name="description"
          placeholder="Photo Description"
          spellCheck="false"
        ></textarea>
      </div>
      <MyButtonComponent />
      <button
        type="submit"
        className={styles.btn}
        onClick={(e) => e.preventDefault()}
      >
        Add
      </button>
    </form>
  );
}

export default FormAddPhoto;
