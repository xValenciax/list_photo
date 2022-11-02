import React, { useEffect, useRef, useState } from "react";
import "../Form.module.css";

function FormAddPhoto() {
  const [photos, setphotos] = useState([]);
  const fileRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (photos.length) {
      localStorage.setItem("photos", JSON.stringify(photos));
      console.log(photos);
    }
  });

  const handleBtnSbmt = (e) => {
    e.preventDefault();

    let addedPhotos = [...photos];
    addedPhotos.push(fileRef.current.value);
    setphotos(addedPhotos);
  };

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
      <input ref={fileRef} type="file" name="image" accept="image/*" />
      <button type="submit" onClick={handleBtnSbmt}>
        Add
      </button>
    </form>
  );
}

export default FormAddPhoto;
