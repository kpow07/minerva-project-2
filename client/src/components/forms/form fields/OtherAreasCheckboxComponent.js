import React from "react";
// import { useEffect, useState } from "react";

function OtherAreasCheckboxComponent({ setters, values }) {
  const { other1, other2, other3, other4, other5, other6, other7, other8 } =
    values;
  const {
    setOther1,
    setOther2,
    setOther3,
    setOther4,
    setOther5,
    setOther6,
    setOther7,
    setOther8,
  } = setters;

  return (
    <div>
      <div className="field-checkbox-component">
        <div className="field-area">
          <h4>
            If you feel you are able to offer any unique guidance/need
            mentorship specifically regarding the options below please check the
            following boxes as they may apply to you. Please note this area of
            the form is COMPLETELY OPTIONAL!!!
          </h4>
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other1"
                type="checkbox"
                value={other1}
                checked={other1 === true}
                unchecked={other1 === false}
                onChange={(e) => setOther1(e.target.checked)}
              />
              White (Eg: German, Irish, English, Italian, Polish, French, etc)
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other2"
                type="checkbox"
                value={other2}
                checked={other2 === true}
                unchecked={other2 === false}
                onChange={(e) => setOther2(e.target.checked)}
              />
              Hispanic, Latino or Spanish origin (Eg: Mexican or Mexican
              American, Puerto Rican, Cuban, Salvadoran, Dominican, Colombian,
              etc)
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other3"
                type="checkbox"
                value={other3}
                checked={other3 === true}
                unchecked={other3 === false}
                onChange={(e) => setOther3(e.target.checked)}
              />{" "}
              Black or African American (Eg: African American, Jamaican,
              Haitian, Nigerian, Ethiopian, Somalian, etc)
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other4"
                type="checkbox"
                value={other4}
                checked={other4 === true}
                unchecked={other4 === false}
                onChange={(e) => setOther4(e.target.checked)}
              />
              Asian (Eg: Chinese, Filipino, Asian Indian, Vietnamese, Korean,
              Japanese, etc)
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other5"
                type="checkbox"
                value={other5}
                checked={other5 === true}
                unchecked={other5 === false}
                onChange={(e) => setOther5(e.target.checked)}
              />
              American Indian or Alaska Native(Eg: Navajo nation, Blackfeet
              tribe, Mayan, Aztec, Native Village or Barrow Inupiat Traditional
              Government, Nome Eskimo Community, etc)
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other6"
                type="checkbox"
                value={other6}
                checked={other6 === true}
                unchecked={other6 === false}
                onChange={(e) => setOther6(e.target.checked)}
              />
              Middle Eastern or North African (Eg: Lebanese, Iranian, Egyptian,
              Syrian, Moroccan, Algerian, etc)
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other7"
                type="checkbox"
                value={other7}
                checked={other7 === true}
                unchecked={other7 === false}
                onChange={(e) => setOther7(e.target.checked)}
              />
              Native Hawaiian or Other Pacific Islander (Eg: Native Hawaiian,
              Samoan, Chamorro, Tongan, Fijian, etc)
            </div>
          </label>
        </div>
        <div className="field-area">
          <label className="check-label">
            <div className="other-desc">
              <input
                className="check"
                name="other8"
                type="checkbox"
                value={other8}
                checked={other8 === true}
                unchecked={other8 === false}
                onChange={(e) => setOther8(e.target.checked)}
              />
              Some other race, ethnicity or origin
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default OtherAreasCheckboxComponent;
