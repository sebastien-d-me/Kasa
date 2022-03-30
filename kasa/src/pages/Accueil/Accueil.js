import React from "react";
import "./Accueil.css";
import Banniere from "../../components/Banniere/Banniere";
import banniereAccueil from "../../assets/img/Pages/Accueil/Banniere.png";

function Accueil() {
  return(
    <>
      <Banniere image={banniereAccueil} />
      <span>AA</span>
    </>
  );
}

export default Accueil;