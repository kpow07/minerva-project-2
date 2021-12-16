import React from "react";
// import { useEffect, useState } from "react";

function FirstLastNameComponent({ setters, values }) {
  const { firstName, lastName, canadian } = values;
  const { setFirstName, setLastName, setCanadian } = setters;

  return (
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
        Last Name:
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
      <div className="field-area">
        <label className="check-label">
          <div className="other-desc">
            <input
              className="check"
              name="canadian"
              type="checkbox"
              value={canadian}
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

export default FirstLastNameComponent;
