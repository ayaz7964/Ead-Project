import React from "react";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <img
          src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg"
          alt="Welcome"
          className="welcome-image"
        />
        <div className="welcome-text">
          <h1>Welcome to Our Website</h1>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="benefit">
          Benefit 1
          <p className="benefit-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="benefit">
          Benefit 2
          <p className="benefit-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="benefit">
          Benefit 3
          <p className="benefit-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Our website is dedicated to providing the best services to our users.
          We aim to connect people across the globe with innovative solutions.
        </p>
        <div className="developer-section">
          <div className="developer-box">
            <img
              src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
              alt="Developer 1"
              className="developer-image"
            />
            <h3>Developer 1</h3>
            <p>5+ years of experience in full-stack development.</p>
          </div>
          <div className="developer-box">
            <img
              src="https://facultyimages.iba-suk.edu.pk/INS-0515.jpg"
              alt="Developer 1"
              className="developer-image"
            />
            <h3>Instructor </h3>
            <p>5+ years of experience in full-stack development.</p>
          </div>
          <div className="developer-box">
            <img
              src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="
              alt="Developer 2"
              className="developer-image"
            />
            <h3>Developer 2</h3>
            <p>
              3+ years of experience in UI/UX design and front-end development.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <h2>Statistics</h2>
        <div className="stats-container">
          <div className="stat">
            <div className="circle">10K+</div>
            <p>People Joined</p>
          </div>
          <div className="stat">
            <div className="circle">50+</div>
            <p>Countries</p>
          </div>
          <div className="stat">
            <div className="circle">100+</div>
            <p>Categories</p>
          </div>
          <div className="stat">
            <div className="circle">500+</div>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
}
