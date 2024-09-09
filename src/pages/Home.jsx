import React from 'react';
import './home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="main-container">
      <h1>Welcome to PSITS Club</h1>
      <p>Engage in technology discussions and events with fellow IT enthusiasts!</p>
      <a href="/membership" className="btn btn-primary">Join Us</a>
    </div>
  );
};

export default Home;
