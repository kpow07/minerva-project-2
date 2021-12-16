import "./title.css";

import React from "react";

const TitleComponent = ({ title }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default TitleComponent;
