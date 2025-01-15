// src/components/TouristCard.js
import React from "react";
import "/home/mriganka/projects/up-tourism/src/styles/TouristCard.css";

function TouristCard({ name, description, image }) {
  return (
    <div className="tourist-card">
      <img src={image} alt={name} className="tourist-image" />
      <div className="tourist-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TouristCard;
