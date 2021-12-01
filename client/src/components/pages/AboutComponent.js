import React from "react";
import Landingstyles from "./Landingstyles.css"


function AboutComponent() {
    const Box = ({ 
    boxSizing: 'border-box',
    minWidth: 0,})
    console.log(Box)
    return (

        
      <div className="about-container">
        <h1>About</h1>
      </div>
      
    );


  }
  export default AboutComponent;
  
