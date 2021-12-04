import React from "react";
//import { useEffect, useState } from "react";

function DescriptionBioResourceComponent({ setters, values }) {
  const { description, bio, otherResources } = values;
  const { setDescription, setBio, setOtherResources } = setters;
  // console.log(
  //   `first name: ${firstName} last name: ${lastName} email: ${email} city: ${city}`
  // );

  return (
    <div>
      <div className="bio-resource">
        <label>
          Brief Description: <br />
          <input
            className="single-line-field-long"
            name="description"
            type="text"
            placeholder="brief description"
            required={true}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />

        <label>
          Bio:
          <br />
          <textarea
            className="multi-line-field-long"
            name="bio"
            type="text"
            placeholder="bio"
            wrap="hard"
            rows="20"
            // cols="70"
            required={true}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <br />
        <label>
          Other Resources:
          <br />
          <textarea
            className="multi-line-field-long"
            name="other resources"
            type="text"
            rows="10"
            // cols="70"
            placeholder="other resources..."
            required={true}
            wrap="hard"
            value={otherResources}
            onChange={(e) => setOtherResources(e.target.value)}
          />
        </label>
        <br />
      </div>
    </div>
  );
}

export default DescriptionBioResourceComponent;
