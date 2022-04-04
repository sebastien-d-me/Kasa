import React from "react";
import "./Tuile.css";

function Tuile({id, image, titre}) {
    return(
        <div className="tuile" id={id}>
            <img src={image}/>
            <span>{titre}</span>
        </div>
    );
}

export default Tuile;