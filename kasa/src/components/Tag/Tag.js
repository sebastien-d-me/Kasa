import React from "react";
import "./Tag.css";

function Tag({nom}) {
  return(
    <span class="tag">{nom}</span>
  );
}

export default Tag;