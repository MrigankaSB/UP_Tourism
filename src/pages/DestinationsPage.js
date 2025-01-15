// src/pages/DestinationsPage.js
import React from "react";
import TouristCard from "/home/mriganka/projects/up-tourism/src/components/TouristCard";
import MapView from "/home/mriganka/projects/up-tourism/src/components/MapView";
import WeatherWidget from "/home/mriganka/projects/up-tourism/src/components/WeatherWidget";
import "/home/mriganka/projects/up-tourism/src/styles/DestinationsPage.css";

function DestinationsPage() {
  const allDestinations = [
    {
      name: "Taj Mahal",
      description: "A UNESCO World Heritage Site in Agra.",
      image: "/images/tajmahal.jpg",
      latitude: 27.1751,
      longitude: 78.0421,
      city: "Agra",
    },
    {
      name: "Varanasi",
      description: "The spiritual capital of India, known for its Ghats.",
      image: "/images/varanasi.jpg",
      latitude: 25.3176,
      longitude: 82.9739,
      city: "Varanasi",
    },
    {
      name: "Lucknow",
      description: "The city of Nawabs, known for Mughal architecture.",
      image: "/images/lucknow.jpg",
      latitude: 26.8467,
      longitude: 80.9462,
      city: "Lucknow",
    },
    {
      name: "Ayodhya",
      description: "An ancient city revered as the birthplace of Lord Ram.",
      image: "/images/ayodhya.jpg",
      latitude: 26.7999,
      longitude: 82.2041,
      city: "Ayodhya",
    },
    {
      name: "Mathura",
      description: "The birthplace of Lord Krishna, with holy temples.",
      image: "/images/mathura.jpg",
      latitude: 27.4924,
      longitude: 77.6737,
      city: "Mathura",
    },
    {
      name: "Kanpur",
      description: "An industrial city rich in historical significance.",
      image: "/images/kanpur.jpg",
      latitude: 26.4499,
      longitude: 80.3319,
      city: "Kanpur",
    },
    {
      name: "Prayagraj",
      description: "Home to the confluence of three rivers.",
      image: "/images/prayagraj.jpg",
      latitude: 25.4358,
      longitude: 81.8463,
      city: "Prayagraj",
    },
    {
      name: "Vrindavan",
      description: "A sacred city associated with Lord Krishna.",
      image: "/images/vrindavan.jpg",
      latitude: 27.5765,
      longitude: 77.7006,
      city: "Vrindavan",
    },
    {
      name: "Fatehpur Sikri",
      description: "A UNESCO World Heritage Site with Mughal architecture.",
      image: "/images/fatehpursikri.jpg",
      latitude: 27.0934,
      longitude: 77.6611,
      city: "Fatehpur Sikri",
    },
    {
      name: "Sarnath",
      description: "Where Gautama Buddha first taught the Dharma.",
      image: "/images/sarnath.jpg",
      latitude: 25.3764,
      longitude: 83.022,
      city: "Varanasi",
    },
    {
      name: "Jhansi",
      description: "Known for its historic fort and Rani Lakshmi Bai.",
      image: "/images/jhansi.jpg",
      latitude: 25.4486,
      longitude: 78.5685,
      city: "Jhansi",
    },
    {
      name: "Dudhwa National Park",
      description: "A protected area with rich biodiversity.",
      image: "/images/dudhwa.jpg",
      latitude: 28.5093,
      longitude: 80.6091,
      city: "Dudhwa",
    },
  ];

  return (
    <div className="destinations-page">
      <h2>All Tourist Destinations in Uttar Pradesh</h2>
      <div className="tourist-cards">
        {allDestinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <div className="card-header">
              <h3>{destination.name}</h3>
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />
            </div>
            <div className="card-body">
              <MapView
                latitude={destination.latitude}
                longitude={destination.longitude}
              />
              <WeatherWidget city={destination.city} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationsPage;
