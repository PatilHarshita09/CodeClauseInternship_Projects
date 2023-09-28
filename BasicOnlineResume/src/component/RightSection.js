
import React from 'react';
import './rightSection.css'

const RightSection = () => {
  // this is for the skill bar
  const skills = [
    { name: 'JavaScript' , level: 60 },
    { name: 'React.js', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 55 },
    { name: 'SQL', level: 70 },
  ];
  return (
    <div className="right-section">
      
      <h1>Sophia Bennet</h1>
      <h2>Web Developer</h2>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
        velit at est cursus euismod ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
        velit at est cursus euismodipsum dolor sit amet, consectetur adipiscing elit. Fusce non
        velit at est cursus euismodipsum dolo .
      </p>
      <div className="experience">
        <h2>Experience</h2>
       
        <ul>
          <li>
            <strong>CodeClause</strong> - Web Developer | 2023 - Present
          </li>
          <li>
            <strong>Infotechneo</strong> - Front-end Developer | 2020 - 2021
          </li>
        </ul>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <hr />
        {skills.map( (skill) => (
          <div key={skill.name} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="personal-interest">
        <h2>Personal Interests</h2>
        <ul>
          <li>Sketching</li>
          <li>Traveling</li>
         
        </ul>
      </div>
    </div>
  );
};

export default RightSection;
