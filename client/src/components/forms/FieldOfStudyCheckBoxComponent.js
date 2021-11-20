import React from "react";
//import { useEffect, useState } from "react";

function FieldOfStudyCheckboxComponent({ setters, values }) {
  //const { science, technology, engineering, mathematics } = values;
  const { setScience, setTechnology, setEngineering, setMathematics } = setters;

  return (
    <div>
      <div className="field-checkbox-component">
        <h4>Which fields are you involved in?</h4>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="science"
                type="checkbox"
                value="science"
                onChange={(e) => setScience(e.target.checked)}
              />{" "}
              Science
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="technology"
                type="checkbox"
                value="technology"
                onChange={(e) => setTechnology(e.target.checked)}
              />
              Technology
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="engineering"
                type="checkbox"
                value="engineering"
                onChange={(e) => setEngineering(e.target.checked)}
              />
              Engineering
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="mathematics"
                type="checkbox"
                value="mathematics"
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
