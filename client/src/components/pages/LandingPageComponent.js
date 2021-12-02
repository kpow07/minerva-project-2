import React, { useEffect, useState } from "react";
import LandingPageCardDiv from "./LandingPageCardDiv";
import AboutComponent from "./AboutComponent";
//import MessageBoard from "./klfnmkf"


function LandingPageComponent(){
    const [AboutComponentOne, setAboutComponentOne] = useState ();
    const [mentors, setMentors] = useState([]);
    

return (


<div className="about-container">

<div card and message board holder> 



<div>
<AboutComponent
    setAboutComponentOne={setAboutComponentOne}/>
<LandingPageCardDiv
setMentors={setMentors}/>


</div>

<div>

    <AboutComponent
    setAboutComponentOne={setAboutComponentOne}/>
  

   


</div>
</div>
</div>





);
}
export default LandingPageComponent;




{/* comment here 
</div>
<MessageBoard/>
</div>*/} 