import React from "react";
import "./Carrousel.css";

function Carrousel({images}) {
    return(
        <>
            {images.map(image => <img key={image} src={image}/>)} 
        </>
    );
}

export default Carrousel;