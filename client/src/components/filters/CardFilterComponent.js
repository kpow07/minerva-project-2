import React from "react";
import CanadianFilter from "./CanadianFilter";
import FieldFilter from "./FieldFilter";
import CityFilter from "./CityFilter";

function CardFilterComponent({ updateField, updateCity, updateCanadian }) {
  let clearFilters = () => {
    updateField("");
    updateCity("");
    updateCanadian("");
    window.location.reload(false);
  };

  return (
    <div className="filter-div">
      <h3>Filters</h3>
      <h3 style={{ cursor: "pointer" }} onClick={clearFilters}>
        Clear all filters
      </h3>
      <CanadianFilter updateCanadian={updateCanadian} />
      <FieldFilter updateCity={updateCity} />
      <CityFilter updateField={updateField} />
    </div>
  );
}

export default CardFilterComponent;
