import React from "react";
//import { useEffect, useState } from "react";

function FieldOfStudyCheckboxComponent({ setters, values }) {
  const { science, technology, engineering, mathematics } = values;
  const { setScience, setTechnology, setEngineering, setMathematics } = setters;

  return (
    <div>
      <div className="field-checkbox-component">
        <h4 className="padding">Which fields are you involved in?</h4>

        <div className="field-area">
          <label className="check-label">
            <div
              className="field-button"
              style={{ backgroundColor: "orangeRed" }}
            >
              <input
                className="check"
                name="science"
                type="checkbox"
                value={science}
                checked={science === true}
                unchecked={science === false}
                onChange={(e) => setScience(e.target.checked)}
              />{" "}
              Science
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div
              className="field-button"
              style={{ backgroundColor: "paleVioletRed" }}
            >
              <input
                className="check"
                name="technology"
                type="checkbox"
                value={technology}
                checked={technology === true}
                unchecked={technology === false}
                onChange={(e) => setTechnology(e.target.checked)}
              />
              Technology
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div
              className="field-button"
              style={{ backgroundColor: "darkBlue" }}
            >
              <input
                className="check"
                name="engineering"
                type="checkbox"
                value={engineering}
                checked={engineering === true}
                unchecked={engineering === false}
                onChange={(e) => setEngineering(e.target.checked)}
              />
              Engineering
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="field-button" style={{ backgroundColor: "gold" }}>
              <input
                className="check"
                name="mathematics"
                type="checkbox"
                value={mathematics}
                checked={mathematics === true}
                unchecked={mathematics === false}
                onChange={(e) => setMathematics(e.target.checked)}
              />
              Mathematics
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default FieldOfStudyCheckboxComponent;
