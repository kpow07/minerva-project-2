import React from "react";
import "./ScienceDirectory.style.css";
import ScienceMappingBioCardComponent from "./ScienceMappingBioCardComponent.js.js.js";
import "../bio-cards/ScienceBioCard.style.css";

class ScienceDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          name: "Elizabeth Bagshaw",
          imageURL: "stempics/elizabeth-bagshaw.jpg",
          id: 1,
          description:
            "Poineer of birth control and sexual education in Canada",
        },
        {
          name: "Roberta Bondar",
          imageURL: "stempics/roberta-bondar.jpg",
          id: 2,
          description: "Neurologist, first woman in space",
        },
        {
          name: "Harriet Brooks",
          imageURL: "stempics/harriet-brooks.jpg",
          id: 3,
          description: "First Canadian female nuclear physicist",
        },
        {
          name: "Mona Nemer, Dr",
          imageURL: "stempics/mona-nemer.jpg",
          id: 4,
          description:
            "Fellow of the Royal Academy of Science of the Royal Society of Canada ",
        },
        {
          name: "Rosalind Franklin",
          imageURL: "stempics/rosalindfranklin.jpg",
          id: 5,
          description: "Contributed to discovering the structure of DNA",
        },
        {
          name: "Dorothy Hodgkin",
          imageURL: "stempics/dorothy-hodgkin.jpg",
          id: 6,
          description: "Discovered the structure of insulin",
        },
        {
          name: "Eugenia Duodu",
          imageURL: "stempics/eugenia-duodu.jpg",
          id: 7,
          description: "Tech CEO, chemist, advocate",
        },
        {
          name: "Elizabeth Bagshaw",
          imageURL: "stempics/elizabeth-bagshaw.jpg",
          id: 8,
          description:
            "Poineer of birth control and sexual education in Canada",
        },
        {
          name: "Roberta Bondar",
          imageURL: "stempics/roberta-bondar.jpg",
          id: 9,
          description: "Neurologist, first woman in space",
        },
        {
          name: "Harriet Brooks",
          imageURL: "stempics/harriet-brooks.jpg",
          id: 10,
          description: "First Canadian female nuclear physicist",
        },
        {
          name: "Mona Nemer, Dr",
          imageURL: "stempics/mona-nemer.jpg",
          id: 11,
          description:
            "Fellow of the Royal Academy of Science of the Royal Society of Canada ",
        },
        {
          name: "Rosalind Franklin",
          imageURL: "stempics/rosalindfranklin.jpg",
          id: 12,
          description: "Contributed to discovering the structure of DNA",
        },
        {
          name: "Dorothy Hodgkin",
          imageURL: "stempics/dorothy-hodgkin.jpg",
          id: 13,
          description: "Discovered the structure of insulin",
        },
        {
          name: "Eugenia Duodu",
          imageURL: "stempics/eugenia-duodu.jpg",
          id: 14,
          description: "Tech CEO, chemist, advocate",
        },
        {
          name: "Elizabeth Bagshaw",
          imageURL: "stempics/elizabeth-bagshaw.jpg",
          id: 15,
          description:
            "Poineer of birth control and sexual education in Canada",
        },
        {
          name: "Roberta Bondar",
          imageURL: "stempics/roberta-bondar.jpg",
          id: 16,
          description: "Neurologist, first woman in space",
        },
        {
          name: "Harriet Brooks",
          imageURL: "stempics/harriet-brooks.jpg",
          id: 17,
          description: "First Canadian female nuclear physicist",
        },
        {
          name: "Mona Nemer, Dr",
          imageURL: "stempics/mona-nemer.jpg",
          id: 18,
          description:
            "Fellow of the Royal Academy of Science of the Royal Society of Canada ",
        },
        {
          name: "Rosalind Franklin",
          imageURL: "stempics/rosalindfranklin.jpg",
          id: 19,
          description: "Contributed to discovering the structure of DNA",
        },
        {
          name: "Dorothy Hodgkin",
          imageURL: "stempics/dorothy-hodgkin.jpg",
          id: 20,
          description: "Discovered the structure of insulin",
        },
        {
          name: "Eugenia Duodu",
          imageURL: "stempics/eugenia-duodu.jpg",
          id: 21,
          description: "Tech CEO, chemist, advocate",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(
          ({ id, name, description, area, imageURL }) => (
            <ScienceMappingBioCardComponent
              key={id}
              name={name}
              description={description}
              area={area}
              imageURL={imageURL}
            />
          )
        )}
      </div>
    );
  }
}
export default ScienceDirectory;
const allFields = async function () {
  const fields = [];
  function science() {
    if (science === true) {
      fields.push("SCIENCE ");
    }
  }
  function technology() {
    if (technology === true) {
      fields.push("TECHNOLOGY");
    }
  }
  function engineering() {
    if (engineering === true) {
      fields.push("ENGINEERING");
    }
  }
  function mathematics() {
    if (mathematics === true) {
      fields.push("MATHEMATICS");
    }
  }
  science();
  technology();
  engineering();
  mathematics();
  return fields.toString();
};
