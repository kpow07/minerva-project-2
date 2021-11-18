import React from "react";
import { useEffect, useState } from "react";

function FieldOfStydyCheckboxComponent() {
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);
  console.log(
    `science: ${science} technology: ${technology} engineering: ${engineering} mathematics: ${mathematics}`
  );
  return (
    <container>
      <div className="field-checkbox-component">
        <div className="field-area">
          <label>Science</label>
          <input
            name="science"
            type="checkbox"
            value="science"
            onChange={(e) => setScience(e.target.checked)}
          />
        </div>
        <div className="field-area">
          <label>Technology</label>
          <input
            name="technology"
            type="checkbox"
            value="technology"
            onChange={(e) => setTechnology(e.target.checked)}
          />
        </div>
        <div className="field-area">
          <label>Engineering</label>
          <input
            name="engineering"
            type="checkbox"
            value="engineering"
            onChange={(e) => setEngineering(e.target.checked)}
          />
        </div>
        <div className="field-area">
          <label>Mathematics</label>
          <input
            name="mathematics"
            type="checkbox"
            value="mathematics"
            onChange={(e) => setMathematics(e.target.checked)}
          />
        </div>
      </div>
    </container>
  );
}

export default FieldOfStydyCheckboxComponent;
