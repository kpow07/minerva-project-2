import React from "react";
import { useState } from "react";

//this was the component file
function ImageUpload() {
  const [image, setImage] = useState();

  console.log(image);

  function onSubmit() {
    const formData = new FormData(); // this is a class that fetch can use
    formData.append("file", image);
    fetch("/api/add-mentor/", {
      method: "POST",
      body: formData,
    });
  }
  return (
    <div className="ImageUpload">
      <input
        type="file"
        accept="image/*"
        multiple={false}
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onClick={onSubmit}>Submit Image</button>
    </div>
  );
}

export default ImageUpload;
