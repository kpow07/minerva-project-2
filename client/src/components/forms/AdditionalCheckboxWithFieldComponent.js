import React from "react";
// import { useEffect, useState } from "react";

function AdditionalCheckboxWithFieldComponent({ setters, values }) {
  const { other10, other11 } = values;
  const {setOther10, setOther11} = setters;
  
  return (
    <div>
      <div className="field-checkbox-component">
        <div className="field-area">
        
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other11"
                type="checkbox"
                value="other11"
                onChange={(e) => setOther11(e.target.checked)}
               
              />
              lgbtqia2s+
            </div>
            </label>
        </div>
     </div>
</div>




<div className="main-personal-data">
<label>
  First Name:
  <input
    className="single-line-field-med"
    name="firstName"
    type="text"
    placeholder="first name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
  />
</label>{" "}
<br />
<label>
  Lasts Name:
  <input
    className="single-line-field-med"
    name="lastName"
    type="text"
    placeholder="last name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
  />
</label>{" "}
<br />
<label>
  Image URL:
  <input
    className="single-line-field-med"
    name="imageURL"
    type="text"
    placeholder="image URL"
    value={imageURL}
    onChange={(e) => setImageURL(e.target.value)}
  />
</label>{" "}
<br />
<div className="field-area">
  <label className="check-label">
    <div className="other-desc">
      <input
        className="check"
        name="canadian"
        type="checkbox"
        value="canadian"
        onChange={(e) => setCanadian(e.target.checked)}
      />
      Canadian?:
    </div>
  </label>
</div>
<br />
</div>



  );
}

export default AdditionalCheckboxWithFieldComponent;

