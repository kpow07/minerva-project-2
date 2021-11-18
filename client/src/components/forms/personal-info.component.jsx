import React from "react";
import { useEffect, useState } from "react";

function PersonalInfoComponent({ setters, ...rest }) {
  console.log(rest);
  const { firstName, lastName, email, city } = rest.values;
  const { setFirstName, setLastName, setCity, setEmail } = setters;
  console.log(
    `first name: ${firstName} last name: ${lastName} email: ${email} city: ${city}`
  );
  return (
    <container>
      <div className="main-personal-data">
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label>
          Lasts Name:{" "}
          <input
            name="lastName"
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          City:{" "}
          <input
            name="city"
            type="text"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label>
          Email Address:{" "}
          <input
            name="email"
            type="text"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
    </container>
  );
}

export default PersonalInfoComponent;
