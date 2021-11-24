import React from "react";
// import { useEffect, useState } from "react";

function AdditionalCheckboxWithFieldComponent({ setters, values }) {
  const { other10, other11 } = values;
  const { setOther10, setOther11 } = setters;

  return (
    <div>
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

      <div className="empty-field">
        <label>
          Other
          <textarea //style this later
            className="single-line-field-med"
            name="other"
            type="text"
            placeholder="Other"
            value={other10}
            onChange={(e) => setOther10(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default AdditionalCheckboxWithFieldComponent;
