import React from "react";
import { useState } from "react";
import BiosFilterForm from "./BiosFilterForm";
import MainBioGallery2 from "./MainBioGallery2";
import TitleComponent from "../../title/TitleComponent";

function BioPageComponent() {
  const [biosList, setBiosList] = useState([]);

  const filterGetRequest = async function (canadian, field) {
    console.log(`CANADIAN: ${canadian}..... FIELD: ${field}`);
    let fetchResult = await fetch(
      `/api/filter-bios-all?field=${field}&canadian=${canadian}`
    );
    let bios = await fetchResult.json();
    console.log("%%%%%%%%BIOS:", bios);
    setBiosList(bios);
    return biosList;
  };

  return (
    <div>
      <TitleComponent title="Famous Women in STEM" />
      <BiosFilterForm onSubmit={filterGetRequest} />
      <MainBioGallery2 bios={biosList} />
    </div>
  );
}

export default BioPageComponent;
