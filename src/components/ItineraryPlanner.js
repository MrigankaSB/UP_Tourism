// src/components/ItineraryPlanner.js
import React, { useState } from "react";

function ItineraryPlanner() {
  const [itinerary, setItinerary] = useState([]);

  const addDestination = (destination) => {
    setItinerary([...itinerary, destination]);
  };

  return (
    <div>
      <h2>Your Itinerary</h2>
      <button onClick={() => addDestination("Taj Mahal")}>Add Taj Mahal</button>
      <ul>
        {itinerary.map((dest, index) => (
          <li key={index}>{dest}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItineraryPlanner;
