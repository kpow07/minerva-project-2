import React from "react";
import { useState, useEffect } from "react";
import FilterForm from "./FilterForm";
import MainBioGallery2 from "./MainBioGallery2";

function BioPageComponent() {
  const [biosList, setBiosList] = useState([]);

  // useEffect(() => {
  //   let getList = async function () {
  //     let fetchResult = await fetch(`api/get-bios`);
  //     let bios = fetchResult.json();
  //     setBiosList(bios);
  //     return biosList;
  //   };
  //   getList();
  // }, [biosList]);
  // const [canadian, setCanadian] = useState(false);
  // const [field, setField] = useState("");
  // const [science, setScience] = useState(false);
  // const [technology, setTechnology] = useState(false);
  // const [engineering, setEngineering] = useState(false);
  // const [mathematics, setMathematics] = useState(false);
  // const [allFields, setAllFields] = useState(false);

  const filterGetRequest = async function (canadian, field) {
    console.log(`CANADIAN: ${canadian}..... FIELD: ${field}`);
    let fetchResult = await fetch(
      `/api/filter-bios-all?field=${field}&canadian=${canadian}`
    );
    let bios = await fetchResult.json();
    setBiosList(bios);
    return biosList;
  };

  return (
    <div>
      <FilterForm
        onSubmit={filterGetRequest}
        values={
          {
            // science,
            // technology,
            // engineering,
            // mathematics,
            // allFields,
            // canadian,
            // field,
          }
        }
        setters={
          {
            // setScience,
            // setTechnology,
            // setEngineering,
            // setMathematics,
            // setAllFields,
            // setField,
            // setCanadian,
          }
        }
      />
      <MainBioGallery2 bios={biosList} />
    </div>
  );
}

export default BioPageComponent;
