
import React from 'react';
import './leftSection.css';
import profilelogo1 from '../images/profilelogo1.jpg' 

const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="profile-photo">
        <img src={profilelogo1} alt="Profile" className="profile-image" />
      </div>

      <div className="content">
        <div className="contact">
          <h2>Contact</h2>
          <hr />
          <p >Phone: (123) 456-7890</p>
          <p >Email: your.email@example.com</p>
          <p >Address: 123 Main St, City, Country</p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <hr />
          <p>Bachelor's Degree in Computer Science</p>
          <p>University Name, Graduation Year</p>
        </div>
        <div className="expertise">
          <h2>Expertise</h2>
          <hr />
          <ul>
            <li>Web Development</li>
            <li>React.js</li>
            <li>JavaScript</li>
            
          </ul>
        </div>
        <div className="languages">
          <h2>Languages</h2>
          <hr />
          <ul>
            <li>English (Fluent)</li>
            <li>Spanish (Intermediate)</li>
            
          </ul>
        </div>
    </div>
  </div>
  );
};

export default LeftSection;

