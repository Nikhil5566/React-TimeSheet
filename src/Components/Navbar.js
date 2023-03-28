import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <h1 className="head">Triade.io</h1>
        <ul>
          <li>
            <a href="/">Data Solutions</a>
          </li>
          <li>
            <a href="/">Technologys</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Reources</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
