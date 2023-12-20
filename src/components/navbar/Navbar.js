import React from "react";
import "./navbar.css";
import logoImage from "../../icons/2.jpg";
import menuIconImage from "../../icons/navbar-collapse-button.png";
import accountIconImage from "../../icons/navbar-account.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-white fixed-top"
      id="navbar"
      style={{ backgroundColor: "white" }}
    >
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          <img
            src={logoImage}
            alt="Logo of brand"
            width="200px"
            height="80px"
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon">
            <img
              src={menuIconImage}
              alt="menu icon"
              class="logo"
              style={{ width: "20px" }}
            ></img>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/">
                <a href="#" class="nav-link h5 m-2 hover-underline-animation">
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/menuPage">
                <a href="#" class="nav-link h5 m-2 hover-underline-animation">
                  Menu
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a
                href="delivery.html"
                class="nav-link h5 m-2 hover-underline-animation"
              >
                Delivery
              </a>
            </li>
            <li class="nav-item">
              <a
                href="price.html"
                class="nav-link h5 m-2 hover-underline-animation"
              >
                Price
              </a>
            </li>
            <li class="nav-item">
              <a
                href="filling.html"
                class="nav-link h5 m-2 hover-underline-animation"
              >
                Filling
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contacts ⮟
              </a>
              <ul class="dropdown-menu animate slideIn">
                <li>
                  <a class="dropdown-item text-center" href="#">
                    8-776-330-24-05
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-center" href="#">
                    11-22-33
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    saya.bakery@gmail.com
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="dropdown ms-auto" id="accountDropDown">
            <button
              class="btn btn-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={accountIconImage}
                alt="Login"
                width="30"
                height="30"
              ></img>
            </button>
            <ul class="dropdown-menu animate slideIn">
              <li>
                <a class="dropdown-item" href="signin.html">
                  Sign in
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="signup.html">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
