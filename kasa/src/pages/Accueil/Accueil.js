import React from "react";
import "./Accueil.css";
import Banniere from "../../components/Banniere/Banniere";
import banniereAccueil from "../../assets/img/Pages/Accueil/Banniere.png";
import { NavLink } from "react-router-dom";
import Tuile from "../../components/Tuile/Tuile";
import ListeLogements from "../../assets/api/logements.json";

function Accueil() {
  return(
    <div className="Accueil">
      <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs" />
      <div className="liste-logements">
        {ListeLogements.map((logement) => <NavLink to={"/logement/"+logement.id}><Tuile key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
      </div>
    </div>
  );
}

export default Accueil;