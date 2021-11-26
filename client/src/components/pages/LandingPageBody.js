import { useState } from "react";
import MathBioCardComponent from "../bio-cards/MathBioCardComponent";
import EngineeringBioCardComponent from "../bio-cards/EngineeringBioCardComponent";
import ScienceBioCardComponent from "../bio-cards/ScienceBioCardComponent";
import TechBioCardComponent from "../bio-cards/TechBioCardComponent";


const FirstPageBody= ()=> {
    return (

<div id= "body">
    <MathBioCardComponent/>
    <ScienceBioCardComponent/>
    <TechBioCardComponent/>
    <EngineeringBioCardComponent/>
</div>

    )
} 
//style card in grid 