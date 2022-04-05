import React from "react";
import "./Fiche.css";
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from "../../assets/api/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Dropdown from "../../components/Dropdown/Dropdown";

function Fiche() {
    const id = useParams();

    const ficheLogement = ListeLogements.find(logement => logement.id === id.id);
    return(
        <>
            {
                ficheLogement ? (
                    <div className="Fiche">
                        <span className="titre-logement">{ficheLogement.title}</span>
                        <span className="endroit-logement">{ficheLogement.location}</span>
                        <span className="nom-proprietaire">{ficheLogement.host.name}</span>
                        <img className="photo-propietaire" src={ficheLogement.host.picture}/>
                        <Tag nom={ficheLogement.tags} />
                        <span>{ficheLogement.rating}</span>
                        <div className="description-equipements">
                            <Dropdown titre="Description" description={ficheLogement.description} />
                            <Dropdown titre="Équipements" description={ficheLogement.equipments} />
                        </div>
                    </div>
                ) : <Navigate replace to="/404" />
            }
        </>
    )
    /*
    <Carrousel images={ficheLogement.pictures}/>
    */
}

export default Fiche;