import React from "react";
import { useState, useEffect } from "react";

function BiosFilterForm({ onSubmit, values, setters }) {
  const [field, setField] = useState("allFields");
  const [canadian, setCanadian] = useState(false);

  useEffect(() => {
    onSubmit(canadian ? "true" : "nothing", field);
    console.log("this use effect ran!!!!!!!!!!!!!!!!!!!");
  }, [canadian, field]);
  console.log(`THE FIELD IS: filter form: ${field}`);
  return (
    <div>
      <div onChange={(e) => setField(e.target.value)}>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="field"
                type="radio"
                value={"science"}
                // checked={science === true}
                //   onChange={(e) => setScience(e.target.checked)}
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
                value={"technology"}
                // checked={technology === true}

                //   onChange={(e) => setTechnology(e.target.checked)}
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
                value={"engineering"}
                // checked={engineering === true}

                //   onChange={(e) => setEngineering(e.target.checked)}
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
                value={"mathematics"}
                // checked={mathematics === true}

                //   onChange={(e) => setMathematics(e.target.checked)}
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
                value={"allFields"}
                defaultChecked

                //   onChange={(e) => setAllFields(e.target.checked)}
              />
              All Fields
            </div>
          </label>
        </div>
      </div>
      <div className="field-area">
        <label className="check-label">
          <div className="other-desc">
            <input
              className="check"
              name="canadian"
              type="checkbox"
              //   value={canadian}
              checked={canadian === true}
              unchecked={canadian === ""}
              onChange={(e) => setCanadian(e.target.checked)}
            />
            Canadian
          </div>
        </label>
      </div>
      {/* <button
        className="submit-button"
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
      >
      </button> */}
    </div>
  );
}
export default BiosFilterForm;
