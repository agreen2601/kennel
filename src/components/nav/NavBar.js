import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Krazy Kennels
        <br />
        <small>I guess you can leave your animals here...</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/location">
              Location
            </Link></li>
          <li>
            <Link className="nav-link" to="/employee">
              Employees
            </Link></li>
          <li>
            <Link className="nav-link" to="/owner">
              Owners
            </Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;