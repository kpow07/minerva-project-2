import React from "react";
// import { useEffect, useState } from "react";

function AdditionalCheckboxWithFieldComponent({ setters, values }) {
  const { other9, other10, other11 } = values;
  const { setOther9, setOther10, setOther11 } = setters;

  return (
    <div>
      <div>
        <div className="field-checkbox-component">
          <div className="field-area">
            <label className="check-label">
              <div className="other-desc1">
                <input
                  className="check"
                  name="other11"
                  type="checkbox"
                  value={other11}
                  checked={other11 === true}
                  onChange={(e) => setOther11(e.target.checked)}
                />
                lgbtqia2s+ Community
              </div>
            </label>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="field-checkbox-component">
            <div className="field-area">
              <label className="check-label">
                <div className="other-desc1">
                  <input
                    className="check"
                    name="other9"
                    type="checkbox"
                    value={other9}
                    checked={other9 === true}
                    onChange={(e) => setOther9(e.target.checked)}
                  />
                  Prefer to self-describe (type below)
                </div>
              </label>
            </div>
          </div>
        </div>

        <textarea //style this later
          className="multi-line-field-long"
          name="other10"
          type="text"
          placeholder="type here"
          wrap="hard"
          rows="5"
          //cols"70"
          value={other10}
          onChange={(e) => setOther10(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AdditionalCheckboxWithFieldComponent;
