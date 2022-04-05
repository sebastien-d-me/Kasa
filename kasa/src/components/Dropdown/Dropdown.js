import React, { useState } from "react";
import "./Dropdown.css";
import fleche from "../../assets/img/Components/Dropdown/Fleche.svg";

function Dropdown({titre, description}) {
  /* Crée un Hook d'état */
  const [ouvert, setOuvert] = useState(false);

  return(
    <div className="dropdown" id={`dropdown-${titre}`}>
      <div className="header-dropdown">
        <div className="titre-dropdown">{titre}</div>
        <a className={`fleche-dropdown ${ouvert}`} href={`#dropdown-${titre}`} onClick={() => setOuvert(!ouvert)}><img src={fleche} alt="Ouvrir cette liste"/></a>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        ouvert && <div className="description-dropdown">{description}</div>
      }
    </div>
  );
}

export default Dropdown;