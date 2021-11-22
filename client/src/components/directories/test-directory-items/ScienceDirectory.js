import React from "react";
import "./ScienceDirectory.style.css";
import ScienceMappingBioCardComponent from "./ScienceMappingBioCardComponent.js";
import "../bio-cards/ScienceBioCard.style.css";

class ScienceDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          name: "Elizabeth Bagshaw",
          imageUrl: "stempics/elizabeth-bagshaw.jpg",
          id: 1,
          description:
            "Poineer of birth control and sexual education in Canada",
        },
        {
          name: "Roberta Bondar",
          imageUrl: "stempics/roberta-bondar.jpg",
          id: 2,
          description: "Neurologist, first woman in space",
        },
        {
          name: "Harriet Brooks",
          imageUrl: "stempics/harriet-brooks.jpg",
          id: 3,
          description: "First Canadian female nuclear physicist",
        },
        {
          name: "Mona Nemer, Dr",
          imageUrl: "stempics/mona-nemer.jpg",
          id: 4,
          description:
            "Fellow of the Royal Academy of Science of the Royal Society of Canada ",
        },
        {
          name: "Rosalind Franklin",
          imageUrl: "stempics/rosalindfranklin.jpg",
          id: 5,
          description: "Contributed to discovering the structure of DNA",
        },
        {
          name: "Dorothy Hodgkin",
          imageUrl: "stempics/dorothy-hodgkin.jpg",
          id: 6,
          description: "Discovered the structure of insulin",
        },
        {
          name: "Eugenia Duodu",
          imageUrl: "stempics/eugenia-duodu.jpg",
          id: 7,
          description: "Tech CEO, chemist, advocate",
        },
        {
          name: "Elizabeth Bagshaw",
          imageUrl: "stempics/elizabeth-bagshaw.jpg",
          id: 8,
          description:
            "Poineer of birth control and sexual education in Canada",
        },
        {
          name: "Roberta Bondar",
          imageUrl: "stempics/roberta-bondar.jpg",
          id: 9,
          description: "Neurologist, first woman in space",
        },
        {
          name: "Harriet Brooks",
          imageUrl: "stempics/harriet-brooks.jpg",
          id: 10,
          description: "First Canadian female nuclear physicist",
        },
        {
          name: "Mona Nemer, Dr",
          imageUrl: "stempics/mona-nemer.jpg",
          id: 11,
          description:
            "Fellow of the Royal Academy of Science of the Royal Society of Canada ",
        },
        {
          name: "Rosalind Franklin",
          imageUrl: "stempics/rosalindfranklin.jpg",
          id: 12,
          description: "Contributed to discovering the structure of DNA",
        },
        {
          name: "Dorothy Hodgkin",
          imageUrl: "stempics/dorothy-hodgkin.jpg",
          id: 13,
          description: "Discovered the structure of insulin",
        },
        {
          name: "Eugenia Duodu",
          imageUrl: "stempics/eugenia-duodu.jpg",
          id: 14,
          description: "Tech CEO, chemist, advocate",
        },
        {
          name: "Elizabeth Bagshaw",
          imageUrl: "stempics/elizabeth-bagshaw.jpg",
          id: 15,
          description:
            "Poineer of birth control and sexual education in Canada",
        },
        {
          name: "Roberta Bondar",
          imageUrl: "stempics/roberta-bondar.jpg",
          id: 16,
          description: "Neurologist, first woman in space",
        },
        {
          name: "Harriet Brooks",
          imageUrl: "stempics/harriet-brooks.jpg",
          id: 17,
          description: "First Canadian female nuclear physicist",
        },
        {
          name: "Mona Nemer, Dr",
          imageUrl: "stempics/mona-nemer.jpg",
          id: 18,
          description:
            "Fellow of the Royal Academy of Science of the Royal Society of Canada ",
        },
        {
          name: "Rosalind Franklin",
          imageUrl: "stempics/rosalindfranklin.jpg",
          id: 19,
          description: "Contributed to discovering the structure of DNA",
        },
        {
          name: "Dorothy Hodgkin",
          imageUrl: "stempics/dorothy-hodgkin.jpg",
          id: 20,
          description: "Discovered the structure of insulin",
        },
        {
          name: "Eugenia Duodu",
          imageUrl: "stempics/eugenia-duodu.jpg",
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
          ({ id, name, description, area, imageUrl }) => (
            <ScienceMappingBioCardComponent
              key={id}
              name={name}
              description={description}
              area={area}
              imageUrl={imageUrl}
            />
          )
        )}
      </div>
    );
  }
}
export default ScienceDirectory;
