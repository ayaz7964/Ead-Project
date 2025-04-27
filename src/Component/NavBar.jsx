import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <h1>LogoAH</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
        <div>
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}
