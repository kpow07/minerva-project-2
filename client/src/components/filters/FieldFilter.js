import React from "react";
import FilteringButton from "./FilteringButton";

function FieldFilter(updateField) {
  let science = [true, false];
  let technology = [true, false];
  let engineering = [true, false];
  let mathematics = [true, false];
  return (
    <div>
      <FilteringButton name="field" task={updateField} input="science" />
    </div>
  );
}

export default FieldFilter;
