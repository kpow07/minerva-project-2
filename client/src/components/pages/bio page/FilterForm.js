import React from "react";
import { useState, useEffect } from "react";

function FilterForm({ onSubmit, values, setters }) {
  const [field, setField] = useState("");
  const [canadian, setCanadian] = useState("");
  const [science, setScience] = useState("");
  const [technology, setTechnology] = useState("");
  const [engineering, setEngineering] = useState("");
  const [mathematics, setMathematics] = useState("");
  const [allFields, setAllFields] = useState("");

  useEffect(() => {
    const whichField = function (
      science,
      technology,
      engineering,
      mathematics,
      allFields
    ) {
      if (science === true) {
        setField("science");
      } else if (technology === true) {
        setField("technology");
      } else if (engineering === true) {
        setField("engineering");
      } else if (mathematics === true) {
        setField("mathematics");
      } else if (allFields === true) {
        setField("");
      }
    };
    const isCanadian = function (canadian) {
      if (canadian === "true") {
        setCanadian("true");
      } else {
        setCanadian("nothing");
      }
    };
    isCanadian(canadian);
    whichField(science, technology, engineering, mathematics, allFields);
  }, [allFields, canadian, engineering, mathematics, science, technology]);

  return (
    <div>
      <div className="field-area">
        <label className="check-label">
          <div className="other-desc">
            <input
              className="check"
              name="field"
              type="radio"
              value={science}
              checked={science === true}
              unchecked={science === false}
              onChange={(e) => setScience(e.target.checked)}
            />
            Science
          </div>
        </label>
      </div>
      <div className="field-area">
        <label className="check-label">
          <div className="other-desc">
            <input
              className="check"
              name="field"
              type="radio"
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
          <div className="other-desc">
            <input
              className="check"
              name="field"
              type="radio"
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
          <div className="other-desc">
            <input
              className="check"
              name="field"
              type="radio"
              value={mathematics}
              checked={mathematics === true}
              unchecked={mathematics === false}
              onChange={(e) => setMathematics(e.target.checked)}
            />
            Mathematics
          </div>
        </label>
      </div>
      <div className="field-area">
        <label className="check-label">
          <div className="other-desc">
            <input
              className="check"
              name="field"
              type="radio"
              value={allFields}
              checked={allFields === true}
              unchecked={allFields === false}
              onChange={(e) => setAllFields(e.target.checked)}
            />
            All Fields
          </div>
        </label>
      </div>
      <div className="field-area">
        <label className="check-label">
          <div className="other-desc">
            <input
              className="check"
              name="canadian"
              type="checkbox"
              value={canadian}
              checked={canadian === true}
              unchecked={canadian === ""}
              onChange={(e) => setCanadian(e.target.checked)}
            />
            Canadian
          </div>
        </label>
      </div>
      <input
        className="submit-button"
        type="button"
        value="FILTER"
        onClick={(e) =>
          onSubmit(
            canadian,
            field
            // science,
            // technology,
            // engineering,
            // mathematics,
            // allFields
          )
        }
      />
    </div>
  );
}
export default FilterForm;
