import React from "react";
import "./Tuile.css";

function Tuile({image, titre}) {
    return(
        <div className="tuile">
            <img src={image}/>
            <span>{titre}</span>
        </div>
    );
}

export default Tuile;