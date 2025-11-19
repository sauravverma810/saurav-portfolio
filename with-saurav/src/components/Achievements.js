import React from 'react';
import { FaGithub, FaLinkedin, FaStar, FaRocket, FaPlus } from 'react-icons/fa';
import '../Css/Achievements.css';
import Challenge from "../images/challenge.png"
import Winner from "../images/winner.jpg"

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <h2 className="achievement-section-title">Achievements</h2>
      <div className="achievement-content">
        <div className="achievement-item">
          <div className="achievement-photo">
            <img src={Challenge} alt="Achievement" />
          </div>
          <div className="achievement-details">
            <h3 className="achievement-title">#Deloitte Certificate</h3>
            <p className="achievement-description">
              Successfully completed Deloitte’s Cybersecurity Virtual Job Simulation, gaining hands-on experience in threat identification, risk assessment, log analysis, and incident response. Worked on real-world scenarios to understand how cybersecurity teams detect vulnerabilities and secure enterprise-level systems.
            </p>
            {/* <ul className="achievement-list">
              <li>Day 1: Responsive Navigation Menu</li>
              <li>Day 2: Image Slider</li>
              <li>Day 3: Tooltip</li>
              <li>Day 30: Real-time Chat Webapplication</li>
            </ul> */}
            <div className="social-buttons">
              <a
                href="https://www.linkedin.com/in/saurav-verma-809406329/?trk=public_profile-settings_edit-profile-content&originalSubdomain=in"
                className="socialmedia-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a
                href="https://github.com/sauravverma810"
                className="socialmedia-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icon" /> GitHub
              </a>
            </div>
          </div>
          <div className="background-icon star-icon"><FaStar /></div>
          <div className="background-icon plus-icon"><FaPlus /></div>
        </div>
      </div>
      <div className="achievement-content">
        <div className="achievement-item">
          <div className="achievement-photo">
            <img src={Winner} alt="Achievement" />
          </div>
          <div className="achievement-details">
            <h3 className="achievement-title">#STUDENT ASSISTANT AI Hackathon</h3>
            <p className="achievement-description">
           Thrilled to share my experience at GNA Hackathon 3.0!
 📍 Held at GNA University, Phagwara | 29-30 March 2025
I had the amazing opportunity to participate in this 36-hour tech sprint alongside a passionate and talented team of developers. We built “Guru AI”, an AI-powered personal student assistant designed to help learners manage their schedules, solve doubts, and boost productivity through smart automation.
            </p>
            <div className="social-buttons">
              <a
                href="https://www.linkedin.com/in/saurav-verma-809406329/?trk=public_profile-settings_edit-profile-content&originalSubdomain=in"
                className="socialmedia-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="background-icon star-icon"><FaStar /></div>
          <div className="background-icon rocket-icon"><FaRocket /></div>
          <div className="background-icon plus-icon"><FaPlus /></div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
