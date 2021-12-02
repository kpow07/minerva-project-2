import React from "react";
import Landingstyles from "./Landingstyles.css"
import branch from "./branch.png"

function AboutComponent () {
    const Box = ({ 
    boxSizing: 'border-box',
    minWidth: 0,})
    console.log(Box)

    return (

        
      <div className="about-container">
        
        <h1>About Us: Minerva Mentoring</h1>
        <p> 
          <img src={branch} alt="olive branch" />
        </p>
         <div className="grid-item">
           
        <h4> When women support each other, incredible things happen</h4>
        <p>Strong ut chicory crema to go cinnamon cup percolator con panna. Cappuccino, single shot crema, beans con panna barista café au lait whipped cup frappuccino trifecta carajillo. Espresso, beans doppio french press ristretto pumpkin spice aromatic. Café au lait, dark, et dripper crema instant cinnamon java.</p>

        
        </div>
      </div>
      
    );

    }
  
  export default AboutComponent;
  
