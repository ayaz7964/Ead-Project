import React from "react";
import "../css/Home.css";

export default function Home() {
  const satisfiedCountries = [
    { name: "Pakistan", image: "https://cdn.pixabay.com/photo/2022/11/18/14/27/flag-7600240_1280.jpg", satisfaction: 90 },
    { name: "Canada", image: "https://cdn.pixabay.com/photo/2017/08/25/20/04/international-2681245_1280.jpg", satisfaction: 85 },
    { name: "Germany", image: "https://cdn.pixabay.com/photo/2017/08/29/22/10/germany-2695058_1280.jpg", satisfaction: 80 },
    { name: "Australia", image: "https://cdn.pixabay.com/photo/2017/08/28/18/51/international-2690850_1280.jpg", satisfaction: 95 },
    { name: "Japan", image: "https://cdn.pixabay.com/photo/2017/08/29/12/47/international-2693231_1280.jpg", satisfaction: 88 },
    { name: "UK", image: "https://cdn.pixabay.com/photo/2020/11/08/15/47/flag-5724142_1280.jpg", satisfaction: 82 },
    { name: "France", image: "https://cdn.pixabay.com/photo/2015/10/17/23/07/flag-993627_1280.jpg", satisfaction: 78 },
    { name: "Afghanistan", image: "https://media.istockphoto.com/id/1251374765/photo/the-national-flag-of-afghanistan.jpg?s=612x612&w=0&k=20&c=3p-_WkQVJxdGNQxUY3oIxpwHEdDAG0QJQ3ytf8uogMg=", satisfaction: 84 },
    { name: "Brazil", image: "https://cdn.pixabay.com/photo/2017/08/28/19/01/international-2690912_1280.jpg", satisfaction: 76 },
    { name: "South Korea", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png", satisfaction: 89 },
    { name: "China", image: "https://cdn.pixabay.com/photo/2020/03/30/16/36/asia-4984773_1280.jpg", satisfaction: 78 },
    { name: "UAE", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png", satisfaction: 84 },
    { name: "Mexico", image: "https://cdn.pixabay.com/photo/2017/12/06/10/57/mexican-flag-3001452_1280.png", satisfaction: 76 },
    { name: "Bangladesh", image: "https://cdn.pixabay.com/photo/2017/08/28/18/53/international-2690863_1280.jpg", satisfaction: 89 },
    { name: "Algeria", image: "https://cdn.pixabay.com/photo/2017/08/26/23/35/international-2684751_1280.jpg", satisfaction: 60 },
  ];

   // Sort countries by satisfaction level (high to low)
   const sortedCountries = satisfiedCountries.sort(
    (a, b) => b.satisfaction - a.satisfaction
  );

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
 {/* Top Satisfied Countries Section */}
      <div className="satisfied-countries-section">
        <h2>Top Satisfied Countries</h2>
        <div className="countries-container">
          {sortedCountries.map((country, index) => (
            <div className="country-card" key={index}>
              <img src={country.image} alt={country.name} className="country-image" />
              <h3>{country.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${country.satisfaction}%` }}
                ></div>
              </div>
              <p>{country.satisfaction}% Satisfaction</p>
            </div>
          ))}
        </div>
      </div>
       <div className="our-aim-section">
        <h2>Our Aim</h2>
        <p>
          Our aim is to create a platform that connects people across the globe, 
          enabling them to share their experiences and services. We strive to 
          foster a community where satisfaction and innovation go hand in hand.
        </p>
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
