import React from "react";
// import { useEffect, useState } from "react";

function PersonalInfoComponent({ setters, values }) {
  const { firstName, lastName, email, city, province } = values;
  const { setFirstName, setLastName, setCity, setProvince, setEmail } = setters;

  return (
    <div>
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
        <label>
          City:
          <input
            className="single-line-field-med"
            name="city"
            type="text"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Province:
          <input
            className="single-line-field-med"
            name="province"
            type="text"
            placeholder="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email Address:
          <inputs
            className="single-line-field-med"
            name="email"
            type="text"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <br />
      </div>
    </div>
  );
}

export default PersonalInfoComponent;
