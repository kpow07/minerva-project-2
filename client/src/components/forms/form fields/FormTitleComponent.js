import React from "react";

function FormTitleComponent({ title }) {
  const formTitle = title;
  console.log(formTitle);
  return (
    <div className="form-title">
      <h1>{formTitle}</h1>
    </div>
  );
}
export default FormTitleComponent;
