import React from 'react';

// Example image URLs (replace with actual image URLs)
const upcomingEvents = [
  {
    id: 1,
    title: "Convention",
    date: "May 5, 2024",
    description: "Join us for a new way of upholding competition and sharing programming knowledge.",
    image: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/440042065_410372818481180_5103464442569935949_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFhaOyCnJ6MTcW9cv4IOsJxQY2lOOE8Rq1BjaU44TxGre-d3Zuum5RaGrsNjrHBGfKsZIjyi4EyFwSuWCSz4EFi&_nc_ohc=e_vMVVyhmEgQ7kNvgFque13&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYBaPbVGLYdZFcYZPDwQlhI21Ol_SXwcrGvgrgYTdLS0Lg&oe=66E34CB2", // Replace with actual image URL
  },
  {
    id: 2,
    title: "School",
    date: "November 17, 2023",
    description: "Learn the latest in practices from our senior.",
    image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/305769544_113054031546395_8213645425174383913_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFz3RkEiDQD9-1fl8g67G7HDtCGAmUA_dMO0IYCZQD903MM1W4UImMzuYmImcfGUOG9G1nOoEAnfsR1WVQxNxFr&_nc_ohc=F3o161oR43YQ7kNvgFQos98&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYBoVrAN-qFSRTj6U3tZqJ-WIC3PJR0IdGc360vOWutaxA&oe=66E36BDD", // Replace with actual image URL
  }
];

const pastEvents = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    date: "September 16, 2022",
    description: "An intensive bootcamp covering the latest web technologies .",
    image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/399688858_310356811816115_5955417607036709884_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTqJr04wglkjNLAxIMiFtB6m0sXWpMzRjqbSxdakzNGBAwg5pRTtJOe9tgcsj8eO5a8tgmsTOYxVJHbXVlupX7&_nc_ohc=r0wICXzmIt0Q7kNvgExZaL7&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=AHExilb8azLYGFiktlNx7Ky&oh=00_AYCDN5m91PeCion3A0DJOkV90_-Ew4f1UeinDo7LO99ihg&oe=66E362A7", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Annual General Meeting",
    date: "August 5, 2024",
    description: "The annual meeting to discuss club achievements, upcoming plans, and elections.",
    image: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/305128070_109399121911886_8484110373240503267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHpP_ArF21C8h_7cWz8PMVudUhxZSWay551SHFlJZrLnp7xF8-Jpe0-1saO7RhyIPiDHpTn8ARcmY-tZR8h6g_l&_nc_ohc=SrPpq1mfBIUQ7kNvgGrpz_K&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=AGD11aPBbgi1PvKhszjRVzA&oh=00_AYBNZpXc4_bvOmTJ5vru9PSRMT7B3CgIzpFET--PXeh-dQ&oe=66E37D9B", // Replace with actual image URL
  }
];

const Event = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0822f3' }}>
        PSITS Club Events
      </h1>

      <h2 className="mb-3" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0822f3' }}>
      Events
      </h2>
      <div className="row">
        {upcomingEvents.map((event) => (
          <div className="col-md-6 mb-4" key={event.id}>
            <div className="card h-100">
              <img src={event.image} alt={event.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{event.title}</h5>
                <p className="card-text" style={{ fontSize: '1.1rem', color: '#777' }}><strong>Date:</strong> {event.date}</p>
                <p className="card-text" style={{ fontSize: '1.1rem', color: '#555' }}>{event.description}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5 mb-3" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0822f3' }}>
        
      </h2>
      <div className="row">
        {pastEvents.map((event) => (
          <div className="col-md-6 mb-4" key={event.id}>
            <div className="card h-100">
              <img src={event.image} alt={event.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{event.title}</h5>
                <p className="card-text" style={{ fontSize: '1.1rem', color: '#777' }}><strong>Date:</strong> {event.date}</p>
                <p className="card-text" style={{ fontSize: '1.1rem', color: '#555' }}>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
