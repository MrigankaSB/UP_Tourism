// src/pages/HomePage.js
import React from "react";
import "/home/mriganka/projects/up-tourism/src/styles/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <h1>Welcome to the Heart of India - Uttar Pradesh</h1>
        <p>
          Immerse yourself in a land of timeless beauty, vibrant cultures, and
          spiritual sanctuaries. Discover the wonders that await in Uttar
          Pradesh.
        </p>
        <div className="hero-buttons">
          <button onClick={() => (window.location.href = "/about")}>
            About Uttar Pradesh
          </button>
          <button onClick={() => (window.location.href = "/attractions")}>
            Explore Attractions
          </button>
        </div>
      </section>

      {/* About Uttar Pradesh */}
      <section className="about">
        <h2>About Uttar Pradesh</h2>
        <p>
          Known as the cultural and spiritual heart of India, Uttar Pradesh is a
          state with a profound heritage that stretches back thousands of years.
          It’s home to landmarks like the Taj Mahal in Agra, the sacred Ganges
          in Varanasi, and the historical city of Lucknow. With a rich tapestry
          of festivals, music, dance, and architecture, Uttar Pradesh embodies
          India’s diverse heritage and vibrant traditions.
        </p>
        <button onClick={() => (window.location.href = "/about")}>
          Learn More
        </button>
      </section>

      {/* Historical Heritage */}
      <section className="historical-heritage">
        <h2>Historical Heritage</h2>
        <p>
          Uttar Pradesh boasts an unparalleled historical legacy. The state is
          home to the awe-inspiring Taj Mahal, a UNESCO World Heritage Site and
          one of the Seven Wonders of the World. Explore the historic cities of
          Jhansi and Fatehpur Sikri, where forts and palaces echo stories of
          valor, romance, and royal splendor. Each monument, from the Mughal
          marvels in Agra to the medieval temples in Ayodhya, offers a glimpse
          into India’s glorious past.
        </p>
        <button onClick={() => (window.location.href = "/historical-heritage")}>
          Discover Heritage
        </button>
      </section>

      {/* Cultural Heritage */}
      <section className="cultural-heritage">
        <h2>Cultural Heritage</h2>
        <p>
          Uttar Pradesh’s cultural wealth is a blend of art, tradition, and
          spirituality. The state is the birthplace of Kathak, one of India’s
          classical dance forms, and is known for its classical music. Festivals
          like Diwali, Holi, and the grand Kumbh Mela, held along the banks of
          the Ganges, showcase the people’s devotion and zest for life.
          Traditional crafts such as Chikankari embroidery from Lucknow continue
          to thrive, blending historical technique with modern style.
        </p>
        <button onClick={() => (window.location.href = "/cultural-heritage")}>
          Explore Culture
        </button>
      </section>

      {/* Natural Beauty */}
      <section className="natural-beauty">
        <h2>Natural Beauty & Wildlife</h2>
        <p>
          From the tranquil banks of the Ganges River to the dense forests of
          Dudhwa National Park, Uttar Pradesh is a paradise for nature
          enthusiasts. Discover the pristine bird sanctuaries, the Royal Bengal
          tigers of Dudhwa, and the diverse wildlife that roams freely across
          the state's lush reserves. Nature lovers can revel in the untouched
          beauty of the rivers, forests, and sanctuaries that make Uttar Pradesh
          an ecological treasure.
        </p>
        <button onClick={() => (window.location.href = "/nature-wildlife")}>
          Explore Wildlife
        </button>
      </section>

      {/* Plan Your Visit */}
      <section className="plan-your-visit">
        <h2>Plan Your Visit</h2>
        <p>
          Let us help you design the perfect trip to Uttar Pradesh. Our guide
          covers everything from hotel recommendations and transportation
          options to the best times to visit each destination. Whether you seek
          a spiritual journey, a historical exploration, or a family getaway,
          our travel resources will help make your trip seamless and memorable.
        </p>
        <button onClick={() => (window.location.href = "/plan-your-trip")}>
          Start Planning
        </button>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Visitor Experiences</h2>
        <blockquote>
          <p>
            "The sights, sounds, and soul of Uttar Pradesh are unlike anywhere
            else in the world. From the spiritual calm of Varanasi to the
            architectural wonders of Agra, this state offers an experience that
            resonates deeply."
          </p>
          <cite>— Arjun, Traveller</cite>
        </blockquote>
        <blockquote>
          <p>
            "Uttar Pradesh’s culture and heritage are a feast for the senses.
            Every city, every monument, every festival is an opportunity to
            experience India’s essence."
          </p>
          <cite>— Priya, Travel Enthusiast</cite>
        </blockquote>
      </section>

      {/* Contact Us */}
      <section className="contact-us">
        <h2>Need Assistance?</h2>
        <p>
          If you have any questions or need help planning your trip, don’t
          hesitate to reach out. Our team is here to assist you with
          personalized travel guidance, accommodations, and more.
        </p>
        <button onClick={() => (window.location.href = "/contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default HomePage;
