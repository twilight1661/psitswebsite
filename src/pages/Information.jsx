import React from 'react';
import './Information.css'; // Import the CSS file

const Information = () => {
  return (
    <div className="information-container">
      <h1 className="text-center">About PSITS</h1>
      <p className="lead text-center">The Philippine Society of Information Technology Students (PSITS) is a community of IT students across the country.</p>
      
      <div className="my-5">
        <h2>Our Mission</h2>
        <p>
          To cultivate a network of students passionate about Information Technology and provide opportunities for collaboration, learning, and development through seminars, workshops, competitions, and other events.
        </p>
      </div>

      <div className="my-5">
        <h2>Our Vision</h2>
        <p>
          To be the leading student organization in the field of Information Technology, fostering innovation and excellence among future IT professionals.
        </p>
      </div>

      <div className="my-5">
        <h2>Objectives</h2>
        <ul>
          <li>Provide IT students with practical experience through events and projects.</li>
          <li>Facilitate knowledge sharing and skill development through workshops and discussions.</li>
          <li>Encourage collaboration among IT students and professionals.</li>
          <li>Support student participation in regional and national IT competitions.</li>
        </ul>
      </div>

      <div className="my-5">
        <h2>General Information</h2>
        <p>
          PSITS is open to all IT students who are eager to learn, grow, and engage in the field of technology. Membership is free, and members can participate in all club activities, including exclusive seminars and workshops.
        </p>
      </div>
    </div>
  );
};

export default Information;
