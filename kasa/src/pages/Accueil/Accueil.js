import React from "react";
import "./Accueil.css";
import Banniere from "../../components/Banniere/Banniere";
import banniereAccueil from "../../assets/img/Pages/Accueil/Banniere.png";
import Tuile from "../../components/Tuile/Tuile";
import ListeLogements from "../../assets/api/logements.json";

function Accueil() {
  const Logements = ListeLogements.map((logement) => {
    return(
      <Tuile key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
    )
  });

  return(
    <div className="Accueil">
      <Banniere image={banniereAccueil} />
      <div className="liste-locations">
        {Logements}
      </div>
    </div>
  );
}

export default Accueil;