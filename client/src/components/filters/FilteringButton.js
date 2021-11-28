import React from "react";

function FilteringButton(task, input, index, name) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label
        onClick={(e) => {
          task(input);
        }}
        className="filter-button"
        for={`${name}-${index}`}
      >
        {input}
      </label>
    </div>
  );
}

export default FilteringButton;
