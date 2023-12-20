import React, { useEffect, useState } from "react";
import "./MenuPage.css";
import APIService from "../../Services/APIService";
import { Link } from "react-router-dom";

function MenuPage() {
  const [cakes, setCakes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchCakes() {
      try {
        const cakesData = await APIService.getAll();
        setCakes(cakesData);
      } catch (error) {
        console.error("Error fetching cakes:", error);
      }
    }

    fetchCakes();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await APIService.getAll();
      const allCakes = response || [];
      const filteredCakes = allCakes.filter((cake) =>
        cake.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setCakes(filteredCakes);
    } catch (error) {
      console.error("Error searching cakes:", error);
    }
  };
  return (
    <div className="MenuPageContainer">
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-12">
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search cakes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid justify-content-center">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav justify-content-center">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cakes
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dessert
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>

              

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bento
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cupcake
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>


              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Eclairs
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>


              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tartalets
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>


              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rolls
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>


              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Japanese pancake
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>


              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle h5 m-2 hover-underline-animation"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mochi
                </a>
                <ul
                  class="dropdown-menu animate slideIn"
                  id="categories-menu"
                  aria-labelledby=""
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Napaleon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dairy girl
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Red velvet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Three chocolates
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mango-passion fruit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Snickers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Honey cake
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      pavlova
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <hr class="m-3 bg-dark"></hr>
      <div className="row">
        {cakes.map((cake) => (
          <div className="col-md-4 cake-card">
            <div className="card h-100">
              <img
                src={cake.strMealThumb}
                alt={cake.strMeal}
                className="card-img-top cake-img"
              />
              <div className="card-body">
                <Link key={cake.idMeal} to={`/meal/${cake.idMeal}`}>
                  <h5 className="card-title">{cake.strMeal}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MenuPage;
