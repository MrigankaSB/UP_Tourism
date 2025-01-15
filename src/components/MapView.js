// src/components/MapView.js
import React, { useEffect, useRef } from "react";
import "/home/mriganka/projects/up-tourism/src/styles/MapView.css";

function MapView({ latitude, longitude }) {
  // Generate a unique map ID for each instance
  const mapRef = useRef();
  const mapId = `map-${latitude}-${longitude}`;

  useEffect(() => {
    if (!window.google || !latitude || !longitude) return;

    // Initialize Google Map only if it has not been initialized yet
    if (!mapRef.current) {
      mapRef.current = new window.google.maps.Map(
        document.getElementById(mapId),
        {
          center: { lat: latitude, lng: longitude },
          zoom: 10,
        }
      );

      new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: mapRef.current,
      });
    }
  }, [latitude, longitude, mapId]);

  return <div id={mapId} className="map-container"></div>;
}

export default MapView;
