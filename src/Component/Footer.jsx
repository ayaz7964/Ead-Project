import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col">
            <h5 className="footer-heading">Global Satisfaction Survey</h5>
            <p className="footer-text">
              We provide insights into global satisfaction levels. Join us to
              make a difference and explore how people feel about their
              countries.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/survey">Survey</a>
              </li>
              <li>
                <a href="/statistics">Statistics</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col">
            <h5 className="footer-heading">Contact</h5>
            <p>
              <i className="fas fa-home"></i> 123 Survey Lane, Data City
            </p>
            <p>
              <i className="fas fa-envelope"></i> support@globalsurvey.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +1 234 567 890
            </p>
            <p>
              <i className="fas fa-print"></i> +1 234 567 891
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Global Satisfaction Survey. All Rights
            Reserved.
            <a href="/privacy"> Privacy Policy</a> |{" "}
            <a href="/terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
