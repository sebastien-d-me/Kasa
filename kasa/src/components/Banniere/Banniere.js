import React from "react";
import "./Banniere.css";

function Banniere({image}) {
  return(
    <img className="banniere" src={image} alt="Bannière"/>
  );
}

export default Banniere;