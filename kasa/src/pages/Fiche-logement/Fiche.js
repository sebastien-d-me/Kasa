import React from "react";
import "./Fiche.css";
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from "../../assets/api/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Etoile from "../../assets/img/Pages/Fiche-logement/Etoile.png";
import EtoileVide from "../../assets/img/Pages/Fiche-logement/EtoileVide.png";
import Dropdown from "../../components/Dropdown/Dropdown";

function Fiche() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = ListeLogements.find(logement => logement.id === id.id);

    /* Tags */
    const tagsLogement = ficheLogement.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(ficheLogement.rating)) {
            etoileComplete = false;
        }
        if(etoileComplete === true) {
            noteLogement.push(<img key={index} className="etoile" src={Etoile} alt={`${ficheLogement.rating}/5`}/>)
        } else {
            noteLogement.push(<img key={index} className="etoile" src={EtoileVide} alt={`${ficheLogement.rating}/5`}/>)
        }
    }

    /* Équipements */
    const equipementsLogement = ficheLogement.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <>
            {
                ficheLogement ? (
                    <div className="Fiche">
                        <Carrousel images={ficheLogement.pictures}/>
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{ficheLogement.title}</span>
                                <span className="endroit-logement">{ficheLogement.location}</span>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{ficheLogement.host.name}</span>
                                    <img className="photo-propietaire" src={ficheLogement.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {noteLogement}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Dropdown titre="Description" description={ficheLogement.description}/>
                            <Dropdown titre="Équipements" description={equipementsLogement}/>
                        </div>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
    /*
    <Carrousel images={ficheLogement.pictures}/>
    */
}

export default Fiche;