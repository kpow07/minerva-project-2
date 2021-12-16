import React from "react";
// import { useState } from "react";

//this was the component file
function ImageUpload({ setters, values }) {
  const { image } = values;
  const { setImage } = setters;

  // function onSubmit() {
  //   const formData = new FormData(); // this is a class that fetch can use
  //   formData.append("image", image);
  //   fetch("/api/add-mentor/", {
  //     method: "POST",
  //     body: formData,
  //   });
  // }
  return (
    <div className="ImageUpload">
      <label>
        Upload Photo:
        <input
          type="file"
          /*value={image}*/
          name="image"
          accept="image/*"
          /*multiple={false}*/
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        {/* <button onClick={onSubmit}>Submit Image</button> */}
      </label>
    </div>
  );
}

export default ImageUpload;
