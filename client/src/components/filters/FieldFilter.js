import React from "react";
import FilteringButton from "./FilteringButton";

function FieldFilter(updateField) {
  return (
    <div>
      <FilteringButton name="field" task={updateField} input="science" />
    </div>
  );
}

export default FieldFilter;
