import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../img/logo.png";
import search from "../img/search.png";
import "../css/Header.css";
import box from "../img/box.png";
const Header = () => {
  return (
    <div className="container">
      <div className="img-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="search-box">
        <img src={search} alt="Search" />
        <input type="text" placeholder="What would you like to cook?" />
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="#">What to cook</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Ingredients</a>
          </li>
          <li>
            <a href="#">Occasions</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>

      <div className="recipe-box-button">
        <img src={box} alt="Recipe Box" />
        <button>Your Recipe Box</button>
      </div>

      <div className="avatar">
        <img src={box} alt="Avatar" />
      </div>
    </div>
  );
};

export default Header;
